"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const ContentMarketing = () => {
    return (
        <div className="min-h-screen bg-elvion-dark text-white pt-20">
            <section className="py-20 lg:py-32 px-4 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Content <span className="text-blue-500">Marketing</span></h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                    Attract and retain your audience with valuable content. We create stories that resonate with your customers.
                </p>
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Content Services</h2>
                        <ul className="space-y-4">
                            {["Blog Writing", "Copywriting", "Video Content", "Infographics", "Email Newsletters"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="text-blue-500" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-elvion-card/30 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Tell Your Story</h3>
                        <p className="text-gray-400 mb-6">Let&apos;s craft your brand message.</p>
                        <Link href="/contact">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 border-none">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ContentMarketing;
