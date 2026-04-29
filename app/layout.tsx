import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senior Product Designer Portfolio",
  description:
    "Portfolio of a senior product designer focused on complex digital products, fintech, analytics, dashboards, and clear UX for business logic."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
