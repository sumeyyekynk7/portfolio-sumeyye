import { Award } from 'lucide-react';
import { certifications } from '../data/education.js';
import SectionReveal from './SectionReveal.jsx';

export default function Certifications() {
  return (
    <SectionReveal id="certifications" className="section-padding border-y border-white/10 bg-white/[0.03]">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Sertifikalar</p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Öğrenme yolculuğumu destekleyen programlar ve başarılar.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => (
            <article key={certificate} className="flex gap-3 rounded-2xl border border-white/10 bg-surface/82 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/40">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Award size={18} aria-hidden="true" />
              </div>
              <h3 className="text-sm font-bold leading-6 text-ink">{certificate}</h3>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
