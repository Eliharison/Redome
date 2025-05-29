import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/Header";

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
          {children}
        </RouteProvider>
      </body>
    </html>
  );
}
