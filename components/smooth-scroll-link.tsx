"use client";

type SmoothScrollLinkProps = {
  href: `#${string}`;
  children: React.ReactNode;
  className?: string;
};

export function SmoothScrollLink({
  href,
  children,
  className = ""
}: SmoothScrollLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);

    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
