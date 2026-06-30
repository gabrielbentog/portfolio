import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

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
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
