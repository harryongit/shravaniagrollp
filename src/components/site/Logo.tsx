import { Link } from "@tanstack/react-router";

export function Mark({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true">
      {/* geometric sprout / furrow — original mark */}
      <defs>
        <linearGradient id="sa-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="1" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M24 4 C24 20 12 22 12 34 C12 41 17 45 24 45 C31 45 36 41 36 34 C36 22 24 20 24 4 Z"
        fill="url(#sa-mark)"
      />
      <path
        d="M24 14 L24 45"
        stroke="var(--color-background)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M24 22 C20 22 17 24 16 28"
        stroke="var(--color-background)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M24 26 C28 26 31 28 32 32"
        stroke="var(--color-background)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 text-primary"
      aria-label="Shravani Agroproducts home"
    >
      <Mark size={compact ? 28 : 34} />
      <span className="flex flex-col leading-none">
        <span className="text-display text-[1.05rem] font-semibold text-ink">Shravani</span>
        {!compact && (
          <span className="text-[0.62rem] uppercase tracking-[0.22em] text-ink-soft mt-0.5">
            Agroproducts LLP
          </span>
        )}
      </span>
    </Link>
  );
}
