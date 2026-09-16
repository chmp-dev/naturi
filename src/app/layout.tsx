import type { Metadata } from "next";
import { Forum, Golos_Text } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/content/site";

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: `${company.name} — ${company.tagline}`,
  description: `${company.descriptor}. Дома без усадки, клея и утеплителей в стенах.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${forum.variable} ${golos.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Перейти к содержимому
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
