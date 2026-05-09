"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

type ContactModalButtonProps = {
  children: React.ReactNode;
  variant?: "secondary" | "light";
  className?: string;
};

const modalTransitionDuration = 300;

export function ContactModalButton({
  children,
  variant = "secondary",
  className = ""
}: ContactModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const closeTimerRef = useRef<number | null>(null);
  const titleId = useId();
  const phoneNumber = "+79997687086";

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openModal = useCallback(() => {
    clearCloseTimer();
    setIsOpen(true);
    window.requestAnimationFrame(() => setIsVisible(true));
  }, [clearCloseTimer]);

  const closeModal = useCallback(() => {
    setIsVisible(false);
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setCopyStatus("");
      closeTimerRef.current = null;
    }, modalTransitionDuration);
  }, [clearCloseTimer]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, isOpen]);

  useEffect(() => clearCloseTimer, [clearCloseTimer]);

  const variantClassName =
    variant === "light"
      ? "bg-white text-ink hover:bg-accent hover:text-white focus-visible:ring-white focus-visible:ring-offset-ink"
      : "bg-panel text-ink hover:bg-accent hover:text-white focus-visible:ring-accent focus-visible:ring-offset-2";

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopyStatus("Скопировано");
      window.setTimeout(() => setCopyStatus(""), 1800);
    } catch {
      setCopyStatus("Не удалось скопировать");
      window.setTimeout(() => setCopyStatus(""), 1800);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={`inline-flex min-h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-6 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 ${variantClassName} ${className}`}
      >
        {children}
      </button>

      {isOpen ? (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 px-5 py-8 backdrop-blur-sm transition-opacity duration-300 ease-out motion-reduce:transition-none ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onMouseDown={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`relative w-full max-w-md rounded-[32px] bg-white p-7 text-ink shadow-2xl transition-all duration-300 ease-out motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-3 scale-[0.98] opacity-0"
            }`}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <h2 id={titleId} className="text-2xl font-semibold tracking-tight">
                Контакты
              </h2>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Закрыть модальное окно"
                className="-mr-2 -mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-panel hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <dl className="mt-7 space-y-5 text-base leading-7">
              <div>
                <dt className="font-semibold text-ink">Номер для связи:</dt>
                <dd className="mt-1">
                  <button
                    type="button"
                    onClick={copyPhoneNumber}
                    className="inline-flex items-center gap-2 rounded-full text-left text-muted transition hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                    aria-label="Скопировать номер телефона"
                  >
                    <span>{phoneNumber}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </button>
                  <span className="ml-3 text-sm text-accent" aria-live="polite">
                    {copyStatus}
                  </span>
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
