import { Code2, Layers3, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

const cards = [
  { icon: Code2, title: "Software Development", text: "Web applications, backend APIs, clean architecture and maintainable code." },
  { icon: ShieldCheck, title: "Quality Engineering", text: "Functional, integration, E2E and automation testing with structured test practices." },
  { icon: Layers3, title: "Test Automation", text: "Playwright, POM, data-driven testing and AI-assisted automation workflows." },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 py-28">
      <div className="container-x">
        <Reveal><SectionHeading eyebrow="01 · About" title="Engineering with both sides in mind." text={portfolio.summary} /></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * .08}>
              <div className="glass h-full rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">
                <Icon className="text-violet-300" size={24} />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}