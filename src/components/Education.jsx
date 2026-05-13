import { MapPin } from 'lucide-react';
import { education } from '../data/education.js';
import SectionReveal from './SectionReveal.jsx';

export default function Education() {
  return (
    <SectionReveal id="education" className="section-padding">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Eğitim</p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Bilgisayar mühendisliği odağında akademik gelişim.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} className="rounded-2xl border border-white/10 bg-surface/82 p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-ink">{item.school}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">{item.department}</p>
                </div>
                <span className="w-fit rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-muted">
                  {item.date}
                </span>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} aria-hidden="true" />
                {item.location}
              </p>
              {item.note && <p className="mt-4 w-fit rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-bold text-accent">{item.note}</p>}
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
