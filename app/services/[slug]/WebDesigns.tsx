"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Layout, ShoppingCart, Database, Layers } from "lucide-react";
import { Button } from "@/components/Button";

export const WebDesigns = () => {
    return (
        <div className="min-h-screen bg-elvion-dark text-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-elvion-primary/10 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Web <span className="text-elvion-primary">Designs</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        We craft stunning, high-performance websites that captivate your audience and drive business growth.
                        From corporate sites to complex web applications, we deliver excellence.
                    </p>
                    <Link href="/contact">
                        <Button className="text-lg px-8 py-4">Start Your Project</Button>
                    </Link>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-elvion-card/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Business Website Design",
                                desc: "Professional websites that establish your brand authority and connect with your target audience.",
                                icon: Layout,
                                href: "/services/business-web"
                            },
                            {
                                title: "Portfolio Website Design",
                                desc: "Showcase your work with elegant, creative portfolios designed to impress potential clients.",
                                icon: Layers,
                                href: "/services/portfolio-web"
                            },
                            {
                                title: "E-commerce Development",
                                desc: "Robust online stores with seamless payment integration and superior user experience.",
                                icon: ShoppingCart,
                                href: "/services/ecommerce"
                            },
                            {
                                title: "Custom Web App",
                                desc: "Tailor-made web applications to solve unique business challenges and streamline operations.",
                                icon: Code,
                                href: "/services/custom-app"
                            },
                            {
                                title: "Full-Stack Solutions",
                                desc: "End-to-end development using cutting-edge technologies for scalable and secure solutions.",
                                icon: Database,
                                href: "/services/fullstack"
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-elvion-dark p-8 rounded-xl border border-white/10 hover:border-elvion-primary/50 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-elvion-primary/20 rounded-lg flex items-center justify-center text-elvion-primary mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-400 mb-6">{service.desc}</p>
                                <Link href={service.href} className="text-elvion-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
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
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Let&apos;s build something amazing together. Contact us today for a free consultation.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <Button className="px-8 py-3">Contact Us</Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="outline" className="px-8 py-3">View Portfolio</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDesigns;
