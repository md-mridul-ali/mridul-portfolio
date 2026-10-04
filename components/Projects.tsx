"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-28">
      <div className="container-x">
        <Reveal><SectionHeading eyebrow="03 · Selected work" title="Projects that show how I build." text="A mix of software development, API engineering, and end-to-end test automation." /></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {portfolio.projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * .07}>
              <motion.article whileHover={{ y: -6 }} className={`project-card group relative overflow-hidden rounded-3xl border p-7 transition-shadow duration-500 hover:shadow-glow ${project.featured ? "border-violet-400/30 bg-gradient-to-br from-violet-500/15 via-white/[.025] to-cyan-500/5 lg:col-span-2" : "border-white/10 bg-white/[.025]"}`}>
                <div className="project-shine" />
                {project.featured && <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200"><Star size={12}/> Featured project</div>}
                <div className="relative flex items-start justify-between gap-5"><div><p className="text-xs tracking-[.2em] text-zinc-600">0{i+1}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3></div><ArrowUpRight className="text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"/></div>
                <p className="relative mt-5 max-w-2xl text-sm leading-7 text-zinc-400">{project.description}</p>
                <div className="relative mt-6 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs text-zinc-300">{item}</span>)}</div>
                <div className="relative mt-7 flex gap-5"><a href={project.github} target="_blank" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"><Github size={16}/> GitHub</a>{project.live && <a href={project.live} target="_blank" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"><ArrowUpRight size={16}/> Live demo</a>}</div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
