import { CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/experience.js';
import SectionReveal from './SectionReveal.jsx';

export default function Experience() {
  return (
    <SectionReveal id="experience" className="section-padding border-y border-white/10 bg-white/[0.03]">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Deneyim</p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Ürün geliştirme, topluluk yönetimi ve gerçek proje deneyimi.
          </h2>
        </div>

        <div className="mt-10 grid gap-5">
          {experiences.map((item) => (
            <article key={item.role} className="rounded-2xl border border-white/10 bg-surface/82 p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-ink">{item.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">{item.organization}</p>
                </div>
                <span className="w-fit rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                  {item.date}
                </span>
              </div>

              <p className="mt-5 leading-7 text-muted">{item.description}</p>
              <p className="mt-3 leading-7 text-muted">{item.body}</p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {item.contributions.map((contribution) => (
                  <p key={contribution} className="flex gap-2 text-sm leading-6 text-muted">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={17} aria-hidden="true" />
                    {contribution}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
