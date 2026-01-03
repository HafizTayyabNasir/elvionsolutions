"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const WebsiteUIUX = () => {
    return (
        <div className="min-h-screen bg-elvion-dark pt-20 text-white">
            <section className="mx-auto max-w-7xl px-4 py-20 lg:py-32">
                <h1 className="mb-6 text-4xl font-bold md:text-6xl">Website <span className="text-purple-500">UI/UX</span></h1>
                <p className="mb-8 max-w-3xl text-xl text-gray-300">
                    Create engaging digital experiences. We design user-friendly interfaces that guide visitors and improve conversion rates.
                </p>
                <div className="mb-16 grid gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">Design Process</h2>
                        <ul className="space-y-4">
                            {["User Research", "Wireframing", "Visual Design", "Interaction Design", "Usability Testing"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="text-purple-500" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-elvion-card/30 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Improve Your UI</h3>
                        <p className="text-gray-400 mb-6">Start your website design project.</p>
                        <Link href="/contact">
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 border-none">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default WebsiteUIUX;
