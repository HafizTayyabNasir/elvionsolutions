"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const GoogleMetaAds = () => {
    return (
        <div className="min-h-screen bg-elvion-dark pt-20 text-white">
            <section className="mx-auto max-w-7xl px-4 py-20 lg:py-32">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Google / Meta <span className="text-blue-500">Ads</span></h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                    Maximize your ROI with targeted paid advertising. We manage and optimize campaigns on Google and Meta platforms.
                </p>
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Campaign Types</h2>
                        <ul className="space-y-4">
                            {["Search Ads (PPC)", "Display Advertising", "Facebook & Instagram Ads", "Retargeting", "Shopping Ads"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="text-blue-500" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-elvion-card/30 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Start Advertising</h3>
                        <p className="text-gray-400 mb-6">Reach your ideal customers today.</p>
                        <Link href="/contact">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 border-none">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default GoogleMetaAds;
