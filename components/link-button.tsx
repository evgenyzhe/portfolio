import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function LinkButton({
  href,
  children,
  variant = "primary"
}: LinkButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:bg-black"
      : "border border-line bg-white text-ink hover:border-ink";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${styles}`}
    >
      {children}
    </Link>
  );
}
