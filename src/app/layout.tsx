import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { About } from "@/components/ui/About";
import { Tech } from "@/components/ui/Techonologies";
import { RouteProvider } from "../context/route-context";

export const metadata: Metadata = {
  title: "Redome",
  description: "O sistema de monitoramento de focos de Aedes Egypt",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}  cz-shortcut-listen="true">
        <RouteProvider>
          <Header />
          <Hero />
          <About />
          <Tech />
          {children}
        </RouteProvider>
      </body>
    </html>
  );
}
