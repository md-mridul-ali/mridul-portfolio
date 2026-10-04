export default function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="mt-5 max-w-2xl leading-7 text-zinc-400">{text}</p>}
    </div>
  );
}