"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const SEO = () => {
    return (
        <div className="min-h-screen bg-elvion-dark pt-20 text-white">
            <section className="mx-auto max-w-7xl px-4 py-20 lg:py-32">
                <h1 className="mb-6 text-4xl font-bold md:text-6xl">Search Engine <span className="text-blue-500">Optimization</span></h1>
                <p className="mb-8 max-w-3xl text-xl text-gray-300">
                    Improve your visibility on Google and drive organic traffic. Our SEO strategies are data-driven and results-oriented.
                </p>
                <div className="mb-16 grid gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">Our SEO Services</h2>
                        <ul className="space-y-4">
                            {["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building", "Local SEO"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="text-blue-500" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-elvion-card/30 p-8">
                        <h3 className="mb-4 text-xl font-bold">Rank Higher</h3>
                        <p className="mb-6 text-gray-400">Get a free SEO audit for your website.</p>
                        <Link href="/contact">
                            <Button className="w-full border-none bg-blue-600 hover:bg-blue-700">Get SEO Audit</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default SEO;
