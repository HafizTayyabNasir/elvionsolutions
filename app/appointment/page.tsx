"use client";
import { Button } from "@/components/Button";
import { useState, useEffect } from "react";
import { fetchAPI } from "@/lib/api";

interface Slot {
    id: number;
    date: string;
    time: string;
    is_booked: boolean;
}

export default function Appointment() {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedSlotId, setSelectedSlotId] = useState<number | null>(null);
    const [slots, setSlots] = useState<Slot[]>([]);
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSlots = async () => {
            try {
                const data = await fetchAPI("/slots/");
                setSlots(data);
            } catch (error) {
                console.error("Failed to load slots", error);
            } finally {
                setLoading(false);
            }
        };
        loadSlots();
    }, []);

    const availableSlots = slots.filter(
        (slot) => slot.date === selectedDate && !slot.is_booked
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedSlotId || !formEmail) return;

        try {
            await fetchAPI(`/slots/${selectedSlotId}/book?user_email=${encodeURIComponent(formEmail)}`, {
                method: "PUT",
            });
            setSubmitted(true);
            // Refresh slots
            const data = await fetchAPI("/slots/");
            setSlots(data);
        } catch (error) {
            console.error("Booking failed:", error);
            alert("Failed to book slot. It might be taken.");
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-elvion-dark px-4">
                <div className="text-center p-8 bg-elvion-card rounded-2xl border border-elvion-primary animate-in fade-in zoom-in">
                    <h2 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h2>
                    <p className="text-elvion-gray">We will contact you shortly at {formEmail}.</p>
                    <Button onClick={() => setSubmitted(false)} className="mt-4">Book Another</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-10 px-4 max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-white">Book a Free Consultation</h1>
                <p className="text-elvion-gray mt-2">Select a time slot that works for you.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-elvion-card p-8 rounded-2xl border border-white/10 shadow-2xl">
                <div className="space-y-6">
                    <div>
                        <label className="block text-white mb-2 font-medium">Select Date</label>
                        <input
                            type="date"
                            required
                            className="w-full bg-elvion-dark border border-white/20 p-3 rounded-lg text-white color-scheme-dark"
                            onChange={(e) => {
                                setSelectedDate(e.target.value);
                                setSelectedSlotId(null);
                            }}
                        />
                    </div>

                    <div>
                        <label className="block text-white mb-2 font-medium">Available Slots</label>
                        {loading ? (
                            <p className="text-gray-400">Loading slots...</p>
                        ) : availableSlots.length === 0 ? (
                            <p className="text-gray-400">{selectedDate ? "No slots available for this date." : "Please select a date first."}</p>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {availableSlots.map((slot) => (
                                    <div
                                        key={slot.id}
                                        onClick={() => setSelectedSlotId(slot.id)}
                                        className={`p-3 rounded-lg text-center cursor-pointer border transition-all ${selectedSlotId === slot.id
                                                ? "bg-elvion-primary text-black border-elvion-primary font-bold"
                                                : "bg-elvion-dark text-gray-300 border-white/10 hover:border-elvion-primary/50"
                                            }`}
                                    >
                                        {slot.time}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            required 
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full bg-elvion-dark border border-white/20 p-3 rounded-lg text-white focus:border-elvion-primary outline-none" 
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            required 
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            className="w-full bg-elvion-dark border border-white/20 p-3 rounded-lg text-white focus:border-elvion-primary outline-none" 
                        />
                    </div>

                    <Button type="submit" disabled={!selectedSlotId || !selectedDate} className="w-full disabled:opacity-50">
                        Confirm Appointment
                    </Button>
                </div>
            </form>
        </div>
    );
}
