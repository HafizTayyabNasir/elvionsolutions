import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "elvion-primary": "#00d28d",
        "elvion-accent": "#4a90e2",
        "elvion-dark": "#0a0a0a",
        "elvion-card": "#1a1a1a",
      },
    },
  },
  plugins: [],
};
export default config;

