import { ExternalLink, Github, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';
import SectionReveal from './SectionReveal.jsx';

export default function Projects() {
  return (
    <SectionReveal id="projects" className="section-padding">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Projeler</p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Veri, mobil uygulama ve web arayüzlerini bir araya getiren çalışmalar.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-surface/82 shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-soft"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="relative flex h-52 items-end overflow-hidden bg-gradient-to-br from-slate-900 via-surface to-violet-950 p-5">
                {project.previewImage && (
                  <img
                    src={project.previewImage}
                    alt={project.previewAlt}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="relative w-full rounded-xl border border-white/10 bg-surface/80 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{project.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-bold text-ink">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-muted">{project.description}</p>
                {project.details && <p className="mt-3 text-sm leading-7 text-muted">{project.details}</p>}

                {project.achievement && (
                  <div className="mt-5 flex gap-2 rounded-xl border border-accent/20 bg-accent-soft p-3 text-sm font-semibold text-accent">
                    <Trophy className="mt-0.5 shrink-0" size={17} aria-hidden="true" />
                    {project.achievement}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="primary-button gap-2 px-4 py-2.5 text-sm">
                      <ExternalLink size={16} aria-hidden="true" />
                      Canlı Siteyi Gör
                    </a>
                  )}
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="secondary-button gap-2 px-4 py-2.5 text-sm">
                      <Github size={16} aria-hidden="true" />
                      GitHub
                    </a>
                  ) : (
                    <a href="#contact" className="secondary-button gap-2 px-4 py-2.5 text-sm">
                      <ExternalLink size={16} aria-hidden="true" />
                      Detayları Gör
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
