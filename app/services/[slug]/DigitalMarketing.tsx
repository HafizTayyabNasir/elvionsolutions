"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Search, Share2, Megaphone, PenTool, BarChart } from "lucide-react";
import { Button } from "@/components/Button";

export const DigitalMarketing = () => {
    return (
        <div className="min-h-screen bg-elvion-dark pt-20 text-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Digital <span className="text-blue-500">Marketing</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        Accelerate your growth with data-driven marketing strategies.
                        We help you reach the right audience, increase engagement, and drive conversions.
                    </p>
                    <Link href="/contact">
                        <Button className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 border-none">Get Started</Button>
                    </Link>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-elvion-card/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "SEO",
                                desc: "Boost your search rankings and drive organic traffic with our expert SEO strategies.",
                                icon: Search,
                                href: "/services/seo"
                            },
                            {
                                title: "Social Media Marketing",
                                desc: "Build a loyal community and engage with your audience across all major social platforms.",
                                icon: Share2,
                                href: "/services/smm"
                            },
                            {
                                title: "Google / Meta Ads",
                                desc: "High-ROI paid advertising campaigns that target your ideal customers with precision.",
                                icon: Megaphone,
                                href: "/services/ads"
                            },
                            {
                                title: "Content Marketing",
                                desc: "Compelling content that tells your brand story and establishes you as a thought leader.",
                                icon: PenTool,
                                href: "/services/content"
                            },
                            {
                                title: "Analytics",
                                desc: "Deep insights and reporting to measure performance and optimize your marketing spend.",
                                icon: BarChart,
                                href: "/services/analytics"
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-elvion-dark p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-400 mb-6">{service.desc}</p>
                                <Link href={service.href} className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    Learn More <ArrowRight size={18} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Let&apos;s create a marketing strategy that delivers real results.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <Button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 border-none">Contact Us</Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="outline" className="px-8 py-3 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">View Portfolio</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;
