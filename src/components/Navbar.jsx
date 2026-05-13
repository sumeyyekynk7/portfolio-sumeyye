import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Ana Sayfa', href: '#home' },
  { label: 'Hakkımda', href: '#about' },
  { label: 'Deneyim', href: '#experience' },
  { label: 'Projeler', href: '#projects' },
  { label: 'Yetenekler', href: '#skills' },
  { label: 'Eğitim', href: '#education' },
  { label: 'Sertifikalar', href: '#certifications' },
  { label: 'İletişim', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/85 shadow-soft backdrop-blur-xl md:inset-y-0 md:left-0 md:right-auto md:w-72 md:overflow-y-auto md:border-b-0 md:border-r">
      <nav className="container-shell flex min-h-20 items-center justify-between gap-4 md:h-full md:w-full md:max-w-none md:flex-col md:items-stretch md:justify-start md:px-6 md:py-8" aria-label="Ana menü">
        <a href="#home" className="focus-ring rounded-md text-base font-bold text-ink md:text-lg">
          Sümeyye Kaynak
        </a>

        <ul className="mt-8 hidden flex-col gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="focus-ring block rounded-xl px-4 py-2.5 text-sm font-semibold text-muted transition hover:bg-accent-soft hover:text-accent"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:block">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Full-Stack Developer</p>
          <p className="mt-2 text-sm leading-6 text-muted">Web, mobil uygulama ve veri odaklı dijital çözümler.</p>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink shadow-sm md:hidden"
          aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${
          isOpen ? 'max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10' : 'max-h-0 overflow-hidden'
        } bg-surface/95 transition-all duration-300`}
      >
        <ul className="container-shell grid gap-1 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="focus-ring block rounded-lg px-3 py-3 text-sm font-semibold text-muted transition hover:bg-accent-soft hover:text-accent"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
