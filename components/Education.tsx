import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="border-t border-white/5 py-28">
      <div className="container-x">
        <Reveal><SectionHeading eyebrow="04 · Background" title="Education & certifications." /></Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-4">
            {portfolio.education.map((item, i) => (
              <Reveal key={item.title} delay={i * .08}>
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-sm text-zinc-400">{item.place}</p></div>
                    <span className="text-sm text-violet-300">{item.detail}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-zinc-500">Certificates</h3>
            <div className="space-y-4">
              {portfolio.certificates.map(([name, org, date]) => (
                <Reveal key={name}><div className="glass rounded-2xl p-6"><h4 className="font-semibold">{name}</h4><p className="mt-1 text-sm text-zinc-400">{org}</p><p className="mt-4 text-xs text-zinc-500">{date}</p></div></Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}