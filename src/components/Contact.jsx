import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import SectionReveal from './SectionReveal.jsx';

const contactLinks = [
  {
    label: 'E-posta',
    value: 'sumeyyekaynak07@gmail.com',
    href: 'mailto:sumeyyekaynak07@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sümeyye-kaynak',
    href: 'https://www.linkedin.com/in/s%C3%BCmeyye-kaynak-1582b01b2/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/sumeyyekynk7',
    href: 'https://github.com/sumeyyekynk7',
    icon: Github,
  },
];

export default function Contact() {
  return (
    <SectionReveal id="contact" className="section-padding">
      <div className="container-shell">
        <div className="grid gap-8 rounded-3xl border border-accent/20 bg-gradient-to-br from-surface to-sky-950/70 p-7 shadow-soft sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow mb-3">İletişim</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Yeni projeler ve iş birlikleri için ulaşabilirsin.</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted">
              Web, mobil uygulama, dashboard veya ürün geliştirme odaklı projeler hakkında konuşmak istersen bana e-posta, GitHub veya LinkedIn üzerinden ulaşabilirsin.
            </p>
            <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-muted">
              <MapPin className="mt-0.5 shrink-0 text-accent" size={17} aria-hidden="true" />
              Adana, Türkiye / Gazimağusa, Kuzey Kıbrıs
            </p>
          </div>

          <div className="grid gap-4">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="focus-ring group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:-translate-y-1 hover:border-accent/50 hover:bg-accent-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-canvas">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">{label}</span>
                  <span className="mt-1 block text-sm text-muted transition group-hover:text-accent">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
