import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        ink: "#09090b",
        surface: "#111114",
        line: "#27272a",
        accent: "#8b5cf6",
        cyan: "#22d3ee",
      },
      boxShadow: {
        glow: "0 0 80px rgba(139, 92, 246, .18)",
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: (name: string, definition: string) => void }) {
      addVariant("light", ".light &");
    },
  ],
};
export default config;