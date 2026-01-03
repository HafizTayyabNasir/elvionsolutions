import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-elvion-card border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">ELVION<span className="text-elvion-primary">.</span></h2>
                    <p className="text-elvion-gray text-sm mb-4">
                        We empower brands to grow smarter, faster, and stronger with strategic, creative, and tech-driven solutions.
                    </p>
                    <div className="flex gap-4">
                        <Facebook className="text-white hover:text-elvion-primary cursor-pointer" size={20} />
                        <Instagram className="text-white hover:text-elvion-primary cursor-pointer" size={20} />
                        <Linkedin className="text-white hover:text-elvion-primary cursor-pointer" size={20} />
                        <Twitter className="text-white hover:text-elvion-primary cursor-pointer" size={20} />
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-elvion-gray">
                        <li><Link href="/about" className="hover:text-elvion-primary">About Us</Link></li>
                        <li><Link href="/portfolio" className="hover:text-elvion-primary">Portfolio</Link></li>
                        <li><Link href="/contact" className="hover:text-elvion-primary">Contact Us</Link></li>
                        <li><Link href="/appointment" className="hover:text-elvion-primary">Book Consultation</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm text-elvion-gray">
                        <li><Link href="/services/business-web" className="hover:text-elvion-primary">Web Development</Link></li>
                        <li><Link href="/services/seo" className="hover:text-elvion-primary">SEO & Content</Link></li>
                        <li><Link href="/services/ads" className="hover:text-elvion-primary">Performance Ads</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Contact</h3>
                    <div className="space-y-3 text-sm text-elvion-gray">
                        <p className="flex items-center gap-2"><Mail size={16} className="text-elvion-primary" /> theelvion@gmail.com</p>
                        <p className="flex items-center gap-2"><Phone size={16} className="text-elvion-primary" /> +92 326 5942996</p>
                        <p className="flex items-center gap-2">🌐 www.elvionsolutions.com</p>
                    </div>
                </div>
            </div>
            <div className="text-center text-elvion-gray text-xs border-t border-white/5 pt-8">
                © 2026 Elvion Solutions. All rights reserved.
            </div>
        </footer>
    );
};