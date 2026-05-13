import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
  { label: 'GitHub', href: 'https://github.com/sumeyyekynk7', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/s%C3%BCmeyye-kaynak-1582b01b2/', icon: Linkedin },
  { label: 'E-posta', href: 'mailto:sumeyyekaynak07@gmail.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/70 py-7">
      <div className="container-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted">© 2026 Sümeyye Kaynak. All rights reserved.</p>
        <div className="flex gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg text-muted transition hover:bg-accent-soft hover:text-accent"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
