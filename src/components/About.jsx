import { Code2, GraduationCap, Palette, Sprout } from 'lucide-react';
import SectionReveal from './SectionReveal.jsx';

const highlights = [
  {
    title: 'Computer Engineering Student',
    description: 'Doğu Akdeniz Üniversitesi’nde Bilgisayar Mühendisliği öğrencisiyim.',
    icon: GraduationCap,
  },
  {
    title: 'Full-Stack Developer',
    description: 'Mobil uygulama, backend, web tasarım ve yönetim paneli geliştirme alanlarında çalışıyorum.',
    icon: Code2,
  },
  {
    title: 'Co-Founder of DataHarvest',
    description: 'Akıllı tarım ve veri analizi odaklı DataHarvest projesinin kurucu ortaklarından biriyim.',
    icon: Sprout,
  },
  {
    title: 'Creative & Technical',
    description: 'Yazılım geliştirme becerilerimi marka tasarımı, sosyal medya ve kullanıcı deneyimiyle birleştiriyorum.',
    icon: Palette,
  },
];

export default function About() {
  return (
    <SectionReveal id="about" className="section-padding">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow mb-3">Hakkımda</p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Kod, tasarım ve ürün fikrini aynı masada düşünen bir geliştiriciyim.
          </h2>
        </div>

        <div>
          <div className="grid gap-4 text-base leading-8 text-muted">
            <p>
              Doğu Akdeniz Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Yazılım geliştirme, web tasarım, mobil uygulama geliştirme ve veri odaklı sistemler üzerine kendimi geliştiriyorum.
            </p>
            <p>
              Kurucu ortaklarından biri olduğum DataHarvest projesinde Full-Stack Developer olarak görev alıyorum. Flutter/Dart ile mobil uygulama, Laravel/PHP ile backend ve yönetim paneli geliştirme çalışmalarında yer aldım.
            </p>
            <p>
              Teknik becerilerimi yalnızca kod tarafında değil; ürün fikri oluşturma, kullanıcı deneyimi, ekip çalışması ve proje yönetimi alanlarında da geliştirmeye devam ediyorum.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
