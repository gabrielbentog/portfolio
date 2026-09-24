import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Gabriel Bento — Desenvolvedor Backend Ruby on Rails",
  description:
    "Desenvolvedor backend especializado em Ruby on Rails, APIs RESTful e integrações externas (Vimeo, Google Drive, ERPs). Aberto a novas oportunidades.",
  keywords: ["Ruby on Rails", "Backend Developer", "API", "PostgreSQL", "Brasília", "Gabriel Bento"],
  authors: [{ name: "Gabriel Bento", url: "https://github.com/gabrielbentog" }],
  openGraph: {
    title: "Gabriel Bento — Desenvolvedor Backend Ruby on Rails",
    description:
      "Desenvolvedor backend especializado em Ruby on Rails, APIs RESTful e integrações externas. Aberto a novas oportunidades.",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Gabriel Bento — Desenvolvedor Backend Ruby on Rails",
    description: "Desenvolvedor backend especializado em Ruby on Rails e sistemas escaláveis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
