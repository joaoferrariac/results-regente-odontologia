import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Standard section shell: anchor id, eyebrow, heading, optional deck.
 * Keeps vertical rhythm and heading levels consistent across the report.
 */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-28 py-12 sm:py-16", className)}
    >
      <header className="mb-8 sm:mb-10">
        {eyebrow ? (
          <p className="mb-3 text-xs font-medium text-ink-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={`${id}-title`}
          className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.03em] text-ink sm:text-[30px]"
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {subtitle}
          </p>
        ) : null}
      </header>
      {children}
    </section>
  );
}
