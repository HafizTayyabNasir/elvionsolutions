"use client";

export const Footer = () => {
  return (
    <footer className="bg-elvion-card border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Elvion Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

