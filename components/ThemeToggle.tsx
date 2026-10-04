"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved !== "light";
    setDark(isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-zinc-300 transition hover:bg-white/10 hover:text-white light:border-zinc-200 light:bg-zinc-100 light:text-zinc-700 light:hover:bg-zinc-200">
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
