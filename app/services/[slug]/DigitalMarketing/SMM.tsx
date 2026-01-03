"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const SMM = () => {
    return (
        <div className="min-h-screen bg-elvion-dark pt-20 text-white">
            <section className="mx-auto max-w-7xl px-4 py-20 lg:py-32">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Social Media <span className="text-blue-500">Marketing</span></h1>
                <p className="mb-8 max-w-3xl text-xl text-gray-300">
                    Engage your audience and build brand loyalty. We create impactful social media campaigns across all major platforms.
                </p>
                <div className="mb-16 grid gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">Platforms</h2>
                        <ul className="space-y-4">
                            {["Facebook & Instagram", "LinkedIn", "Twitter / X", "TikTok", "YouTube"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="text-blue-500" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-elvion-card/30 p-8">
                        <h3 className="text-xl font-bold mb-4">Grow Your Following</h3>
                        <p className="text-gray-400 mb-6">Let&apos;s create a social media strategy for you.</p>
                        <Link href="/contact">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 border-none">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default SMM;
