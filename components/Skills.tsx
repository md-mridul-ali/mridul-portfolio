import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-28">
      <div className="container-x">
        <Reveal><SectionHeading eyebrow="02 · Toolkit" title="Technologies I work with." text="A practical stack spanning development, APIs, databases, software testing and automation." /></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(portfolio.skills).map(([group, items], i) => (
            <Reveal key={group} delay={(i % 4) * .05}>
              <div className="glass h-full rounded-2xl p-6 hover:scale-105 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold">{group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-xs text-zinc-300">{item}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}