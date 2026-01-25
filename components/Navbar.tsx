"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full border-b border-white/10 bg-elvion-dark/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-1 text-2xl font-bold text-white">
            <Image
              src="/logo.webp"
              alt="Elvion Logo"
              width={1920}
              height={720}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center space-x-6 lg:flex">
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-elvion-primary">
              About Us
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-elvion-primary">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-elvion-primary">
              Contact
            </Link>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            {isAuthenticated && user ? (
              <button
                onClick={logout}
                className="text-sm font-semibold text-white hover:text-elvion-primary"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="text-sm font-semibold text-white hover:text-elvion-primary">
                Login
              </Link>
            )}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

