"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const BusinessWebsiteDesign = () => {
    return (
        <div className="min-h-screen bg-elvion-dark pt-20 text-white">
            <section className="py-20 lg:py-32 px-4 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Business <span className="text-elvion-primary">Website Design</span></h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                    Establish a powerful online presence with a professional business website. We create custom designs that reflect your brand identity and drive credibility.
                </p>
                <div className="mb-16 grid gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">Why Choose Us?</h2>
                        <ul className="space-y-4">
                            {["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading Speed", "Secure & Scalable"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="text-elvion-primary" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-elvion-card/30 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Ready to start?</h3>
                        <p className="text-gray-400 mb-6">Get a free consultation for your business website.</p>
                        <Link href="/contact">
                            <Button className="w-full">Get A Quote</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default BusinessWebsiteDesign;
