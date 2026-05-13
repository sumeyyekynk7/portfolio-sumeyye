import { skillGroups } from '../data/skills.js';
import SectionReveal from './SectionReveal.jsx';

export default function Skills() {
  return (
    <SectionReveal id="skills" className="section-padding border-y border-white/10 bg-white/[0.03]">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Yetenekler</p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Teknik, tasarım ve ürün geliştirme becerileri.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.category} className="rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-sm">
              <h3 className="text-base font-bold text-ink">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-bold text-muted transition hover:border-accent hover:text-accent">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
