"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const EcommWebsite = () => {
    return (
        <div className="min-h-screen bg-elvion-dark text-white pt-20">
            <section className="py-20 lg:py-32 px-4 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">E-commerce <span className="text-elvion-primary">Development</span></h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                    Launch your online store with a robust e-commerce solution. We provide secure, scalable, and user-friendly platforms to maximize your sales.
                </p>
                <div className="mb-16 grid gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
                        <ul className="space-y-4">
                            {["Product Management", "Secure Payments", "Inventory Tracking", "User Accounts", "Mobile Shopping"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="text-elvion-primary" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-elvion-card/30 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Start Selling Online</h3>
                        <p className="mb-6 text-gray-400">Get a custom e-commerce solution today.</p>
                        <Link href="/contact">
                            <Button className="w-full">Get Quote</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default EcommWebsite;
