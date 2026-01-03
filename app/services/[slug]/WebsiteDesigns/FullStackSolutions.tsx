"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const FullStackSolutions = () => {
    return (
        <div className="min-h-screen bg-elvion-dark pt-20 text-white">
            <section className="py-20 lg:py-32 px-4 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Full-Stack <span className="text-elvion-primary">Solutions</span></h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                    Comprehensive development services covering both frontend and backend. We deliver complete, end-to-end software solutions.
                </p>
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
                        <ul className="space-y-4">
                            {["React / Next.js", "Node.js / Express", "Python / Django", "Database Design", "Cloud Deployment"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="text-elvion-primary" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-elvion-card/30 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Get Full-Stack Dev</h3>
                        <p className="text-gray-400 mb-6">Hire our expert full-stack team.</p>
                        <Link href="/contact">
                            <Button className="w-full">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default FullStackSolutions;
