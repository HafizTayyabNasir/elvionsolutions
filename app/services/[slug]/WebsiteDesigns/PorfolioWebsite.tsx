"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const PortfolioWebsite = () => {
    return (
        <div className="min-h-screen bg-elvion-dark text-white pt-20">
            <section className="mx-auto max-w-7xl px-4 py-20 lg:py-32">
                <h1 className="mb-6 text-4xl font-bold md:text-6xl">Portfolio <span className="text-elvion-primary">Website Design</span></h1>
                <p className="mb-8 max-w-3xl text-xl text-gray-300">
                    Showcase your work in style. We build stunning portfolio websites for creatives, agencies, and professionals to highlight their achievements.
                </p>
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Features</h2>
                        <ul className="space-y-4">
                            {["Gallery Showcases", "Interactive Elements", "Personal Branding", "Contact Forms", "Blog Integration"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="text-elvion-primary" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-elvion-card/30 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Showcase Your Work</h3>
                        <p className="text-gray-400 mb-6">Let&apos;s build a portfolio that stands out.</p>
                        <Link href="/contact">
                            <Button className="w-full">Start Project</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default PortfolioWebsite;
