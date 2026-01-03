"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const CustomWebApp = () => {
    return (
        <div className="min-h-screen bg-elvion-dark pt-20 text-white">
            <section className="mx-auto max-w-7xl px-4 py-20 lg:py-32">
                <h1 className="mb-6 text-4xl font-bold md:text-6xl">Custom <span className="text-elvion-primary">Web App</span></h1>
                <p className="mb-8 max-w-3xl text-xl text-gray-300">
                    Solve complex business problems with tailored web applications. We build scalable and secure apps designed to fit your specific needs.
                </p>
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                        <ul className="space-y-4">
                            {["SaaS Platforms", "Enterprise Solutions", "Customer Portals", "Workflow Automation", "API Integration"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="text-elvion-primary" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-elvion-card/30 p-8">
                        <h3 className="mb-4 text-xl font-bold">Build Your App</h3>
                        <p className="text-gray-400 mb-6">Discuss your requirements with our experts.</p>
                        <Link href="/contact">
                            <Button className="w-full">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default CustomWebApp;
