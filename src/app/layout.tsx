import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marlon Batalha - Portfólio",
  description: "Portfólio profissional de Marlon Batalha - Desenvolvedor Full Stack",
  keywords: ["desenvolvedor", "portfolio", "web development", "Marlon Batalha"],
  authors: [{ name: "Marlon Batalha" }],
  openGraph: {
    title: "Marlon Batalha - Portfólio",
    description: "Portfólio profissional de Marlon Batalha - Desenvolvedor Full Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
