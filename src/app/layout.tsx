import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { RootProvider } from "@/components/providers/root-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Istiak Ahmed | UI/UX Designer Portfolio",
  description: "Transforming ideas into stunning visuals — UI/UX and brand design that captivates, engages, and delivers results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0d0202] text-white font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
