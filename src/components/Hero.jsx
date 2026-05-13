import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const quickStats = [
  { value: 'Full-Stack', label: 'Developer' },
  { value: '2024+', label: 'DataHarvest' },
  { value: 'Teknofest', label: 'Finalist' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-14 lg:pt-16">
      <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="container-shell grid min-h-[calc(100vh-96px)] items-center gap-12 pb-16 lg:grid-cols-[1fr_420px] lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-4">Bilgisayar Mühendisliği Öğrencisi • Full-Stack Developer</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-ink sm:text-6xl lg:text-7xl">
            Merhaba, ben Sümeyye Kaynak.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Web, mobil uygulama ve kullanıcı odaklı dijital çözümler geliştiriyorum.
          </p>
          <p className="mt-4 max-w-2xl leading-8 text-muted">
            Flutter, Laravel, PHP, JavaScript ve modern web teknolojileriyle özellikle mobil uygulama, backend sistemleri, dashboard tasarımları ve veri odaklı projeler üzerine çalışıyorum.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="primary-button gap-2 px-6 py-3.5 text-sm">
              Projelerimi Gör
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="secondary-button gap-2 px-6 py-3.5 text-sm">
              Benimle İletişime Geç
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="secondary-button gap-2 px-4 py-2.5 text-sm" href="https://github.com/sumeyyekynk7" target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            <a className="secondary-button gap-2 px-4 py-2.5 text-sm" href="https://www.linkedin.com/in/s%C3%BCmeyye-kaynak-1582b01b2/" target="_blank" rel="noreferrer">
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
          aria-label="Profil özeti"
        >
          <div className="absolute -left-4 top-10 h-28 w-28 rounded-full bg-accent/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-soft backdrop-blur">
            <img
              src="/foto/profile.jpg"
              alt="Sümeyye Kaynak portre fotoğrafı"
              className="h-[30rem] w-full rounded-xl object-cover object-[58%_46%] sm:h-[34rem] lg:h-[36rem]"
              loading="eager"
            />
            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-semibold text-accent">Creative & Technical</p>
              <p className="mt-2 text-2xl font-bold text-ink">Mobil, backend ve dashboard odaklı ürün geliştirme.</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} aria-hidden="true" />
                Adana / Gazimağusa
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {quickStats.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-sm font-bold text-ink">{item.value}</p>
                  <p className="mt-1 text-xs text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
