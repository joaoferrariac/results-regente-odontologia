import type { Hero as HeroContent, ReportMeta } from "@/types/report";

interface HeroProps {
  hero: HeroContent;
  meta: ReportMeta;
}

export function Hero({ hero, meta }: HeroProps) {
  return (
    <div id="visao-geral" className="scroll-mt-36 pb-10 pt-12 sm:pb-12 sm:pt-20">
      <p className="mb-6 flex items-center gap-2 text-xs text-ink-soft">
        {meta.period} · {meta.range}
      </p>

      <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-ink sm:text-6xl">
        Performance em perspectiva.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed tracking-[-0.015em] text-ink sm:text-xl">{hero.headline}</p>

      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-[15px]">
        {hero.lead}
      </p>


    </div>
  );
}
