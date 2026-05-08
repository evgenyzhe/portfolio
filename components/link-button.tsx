"use client";

import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { getPagePath } from "@/lib/get-page-path";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  download?: boolean;
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  download = false,
  className = ""
}: LinkButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:bg-accent"
      : variant === "accent"
        ? "bg-accent text-white hover:bg-accent/90"
        : "bg-panel text-ink hover:bg-accent hover:text-white";

  const resolvedClassName = `inline-flex min-h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-6 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${styles} ${className}`;

  if (href.startsWith("#")) {
    return (
      <SmoothScrollLink
        href={href as `#${string}`}
        className={resolvedClassName}
      >
        {children}
      </SmoothScrollLink>
    );
  }

  return (
    <a href={getPagePath(href)} download={download} className={resolvedClassName}>
      {children}
    </a>
  );
}
