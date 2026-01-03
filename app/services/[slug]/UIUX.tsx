"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Monitor, Smartphone, Palette, PenTool } from "lucide-react";
import { Button } from "@/components/Button";

export const UIUX = () => {
    return (
        <div className="min-h-screen bg-elvion-dark pt-20 text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent" />
                <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">
                        UI/UX <span className="text-purple-500">Design</span>
                    </h1>
                    <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-300">
                        We design intuitive, engaging, and beautiful user experiences.
                        From wireframes to polished interfaces, we bring your vision to life.
                    </p>
                    <Link href="/contact">
                        <Button className="border-none bg-purple-600 px-8 py-4 text-lg hover:bg-purple-700">Start Design Project</Button>
                    </Link>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-elvion-card/50 py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {[
                            {
                                title: "Website UI/UX",
                                desc: "User-centric website designs that look great and convert visitors into customers.",
                                icon: Monitor,
                                href: "/services/web-ui"
                            },
                            {
                                title: "Mobile App UI/UX",
                                desc: "Seamless and intuitive mobile app interfaces for iOS and Android.",
                                icon: Smartphone,
                                href: "/services/app-ui"
                            },
                            {
                                title: "Branding & Logo",
                                desc: "Create a memorable brand identity with professional logo design and branding guidelines.",
                                icon: Palette,
                                href: "/services/branding"
                            },
                            {
                                title: "Prototyping",
                                desc: "Interactive prototypes to visualize and test your product before development.",
                                icon: PenTool,
                                href: "/services/prototyping"
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="group rounded-xl border border-white/10 bg-elvion-dark p-8 transition-all duration-300 hover:border-purple-500/50">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-purple-500/20 text-purple-500 transition-transform group-hover:scale-110">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                                <p className="mb-6 text-gray-400">{service.desc}</p>
                                <Link href={service.href} className="flex items-center gap-2 font-semibold text-purple-500 transition-all hover:gap-3">
                                    Learn More <ArrowRight size={18} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="mb-6 text-4xl font-bold">Need Exceptional Design?</h2>
                    <p className="mb-8 text-lg text-gray-300">
                        Elevate your product with world-class UI/UX design.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <Button className="border-none bg-purple-600 px-8 py-3 hover:bg-purple-700">Contact Us</Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="outline" className="border border-purple-500 px-8 py-3 text-purple-500 hover:bg-purple-500 hover:text-white">View Portfolio</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UIUX;
