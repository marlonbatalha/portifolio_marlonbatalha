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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
