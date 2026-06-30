import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Bento — Desenvolvedor Ruby on Rails",
  description:
    "Desenvolvedor Ruby on Rails especializado em APIs RESTful, integrações externas e refatoração de sistemas legados. Disponível para novas oportunidades.",
  keywords: ["Ruby on Rails", "Backend Developer", "API", "PostgreSQL", "Brasília", "Gabriel Bento"],
  authors: [{ name: "Gabriel Bento", url: "https://github.com/gabrielbentog" }],
  openGraph: {
    title: "Gabriel Bento — Desenvolvedor Ruby on Rails",
    description:
      "Desenvolvedor Ruby on Rails especializado em APIs RESTful, integrações externas e refatoração de sistemas legados.",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Gabriel Bento — Desenvolvedor Ruby on Rails",
    description: "Desenvolvedor Ruby on Rails especializado em APIs RESTful e sistemas escaláveis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
