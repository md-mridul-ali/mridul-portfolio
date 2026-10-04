import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-x flex flex-col justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        <p>Built with Next.js · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  );
}