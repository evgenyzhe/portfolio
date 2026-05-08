"use client";

import { useEffect, useId, useState } from "react";

type ContactModalButtonProps = {
  children: React.ReactNode;
  variant?: "secondary" | "light";
  className?: string;
};

export function ContactModalButton({
  children,
  variant = "secondary",
  className = ""
}: ContactModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const variantClassName =
    variant === "light"
      ? "bg-white text-ink hover:bg-accent hover:text-white focus:ring-white focus:ring-offset-ink"
      : "bg-panel text-ink hover:bg-accent hover:text-white focus:ring-accent focus:ring-offset-2";

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex min-h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-6 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 ${variantClassName} ${className}`}
      >
        {children}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 px-5 py-8 backdrop-blur-sm"
          onMouseDown={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full max-w-md rounded-[32px] bg-white p-7 text-ink shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <h2 id={titleId} className="text-2xl font-semibold tracking-tight">
                Контакты
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Закрыть модальное окно"
                className="-mr-2 -mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-muted transition hover:bg-panel hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent"
              >
                ×
              </button>
            </div>

            <dl className="mt-7 space-y-5 text-base leading-7">
              <div>
                <dt className="font-semibold text-ink">Номер для связи:</dt>
                <dd className="mt-1 text-muted">
                  <a href="tel:+79997687086" className="transition hover:text-accent">
                    +79997687086
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Контактный имейл:</dt>
                <dd className="mt-1 text-muted">
                  <a
                    href="mailto:zhesides@gmail.com"
                    className="transition hover:text-accent"
                  >
                    zhesides@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Телеграм:</dt>
                <dd className="mt-1 text-muted">
                  <a
                    href="https://t.me/evgenyzhe"
                    className="transition hover:text-accent"
                  >
                    evgenyzhe
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : null}
    </>
  );
}
