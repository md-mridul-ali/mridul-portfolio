"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [7, -7]);
  const rotateY = useTransform(springX, [-300, 300], [-7, 7]);

  return (
    <section onMouseMove={(e) => { x.set(e.clientX - innerWidth / 2); y.set(e.clientY - innerHeight / 2); }} className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="grid-bg absolute inset-0" />
      <div className="hero-noise absolute inset-0 opacity-30" />
      <motion.div style={{ x: springX, y: springY }} className="glow-orb left-[8%] top-[20%] h-72 w-72 bg-violet-600/20" />
      <motion.div style={{ x: useTransform(springX, v => -v * .25), y: useTransform(springY, v => -v * .25) }} className="glow-orb right-[5%] top-[34%] h-80 w-80 bg-cyan-500/10" />

      <div className="container-x relative py-24">
        <motion.div style={{ rotateX, rotateY, transformPerspective: 1200 }} className="max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs font-medium text-violet-200 light:text-violet-700"><Sparkles size={13}/> Software Engineer · Web · QA Automation</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }} className="mt-6 text-5xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-7xl lg:text-[6.7rem]">
            MD. Mridul Ali
            <span className="block bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text pb-2 text-transparent">Software Engineer.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }} className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">Building web applications, backend APIs, and automated testing solutions with a focus on reliability and maintainability.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .4 }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:scale-[1.02]">Explore my work <ArrowUpRight size={16}/></a>
            <a href="/MD_Mridul_Ali_CV17.pdf" download className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10">Download CV</a>
            <a href="#contact" className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 hover:text-white"><ArrowDown size={17}/></a>
            <a aria-label="GitHub" href={portfolio.github} target="_blank" className="rounded-full border border-white/10 p-3 text-zinc-300 hover:text-white"><Github size={18}/></a>
            <a aria-label="LinkedIn" href={portfolio.linkedin} target="_blank" className="rounded-full border border-white/10 p-3 text-zinc-300 hover:text-white"><Linkedin size={18}/></a>
          </motion.div>
        </motion.div>
        <div className="mt-20 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[['6+','Featured Projects'],['3.66','AIUB CGPA'],['2','Testing Specialties'],['2026','Graduation']].map(([value,label], i) => <motion.div key={label} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.65+i*.08}} className="glass rounded-2xl p-4"><p className="text-xl font-semibold">{value}</p><p className="mt-1 text-xs text-zinc-500">{label}</p></motion.div>)}
        </div>
        <a href="#about" className="absolute bottom-10 left-5 hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 sm:flex"><ArrowDown size={14} className="animate-bounce"/> Scroll to explore</a>
      </div>
    </section>
  );
}
