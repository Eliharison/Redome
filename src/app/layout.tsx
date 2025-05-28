import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
