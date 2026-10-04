"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = ["about", "skills", "projects", "education", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-zinc-950/65 backdrop-blur-2xl light:border-zinc-200 light:bg-white/75">
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#" className="text-base font-semibold tracking-tight">Mridul<span className="text-violet-500">.</span></a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => <a key={link} href={`#${link}`} className="text-sm capitalize text-zinc-400 transition hover:text-white light:text-zinc-600 light:hover:text-zinc-950">{link}</a>)}
          <ThemeToggle />
          <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 light:border-zinc-200 light:bg-zinc-100 light:hover:bg-zinc-200">Let&apos;s talk</a>
        </div>
        <div className="flex items-center gap-2 md:hidden"><ThemeToggle /><button aria-label="Toggle menu" className="rounded-full border border-white/10 p-2 light:border-zinc-200" onClick={() => setOpen(!open)}>{open ? <X size={19}/> : <Menu size={19}/>}</button></div>
      </nav>
      {open && <div className="border-t border-white/5 bg-zinc-950/95 px-5 py-5 md:hidden light:border-zinc-200 light:bg-white/95">{links.map((link) => <a key={link} href={`#${link}`} onClick={() => setOpen(false)} className="block py-3 capitalize text-zinc-300 light:text-zinc-700">{link}</a>)}</div>}
    </header>
  );
}
