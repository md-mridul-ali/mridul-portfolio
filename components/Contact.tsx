import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[.03] to-cyan-500/10 p-8 sm:p-12 lg:p-16">
            <div className="glow-orb -right-20 -top-20 h-56 w-56 bg-violet-500/20" />
            <SectionHeading eyebrow="05 · Contact" title="Let’s build something reliable." text="Have a project, opportunity, or idea? I’d be happy to connect." />
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${portfolio.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950"><Mail size={16}/> Email me</a>
              <a href={portfolio.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm"><Linkedin size={16}/> LinkedIn</a>
              <a href={portfolio.github} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm"><Github size={16}/> GitHub <ArrowUpRight size={15}/></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}