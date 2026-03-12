import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Café Hagen — Specialty Coffee & Hygge · Seattle",
  description: "Six neighborhood cafés rooted in Scandinavian warmth. Specialty coffee, seasonal brunch, wine, cocktails, and house-baked pastries across Seattle and Bellevue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
