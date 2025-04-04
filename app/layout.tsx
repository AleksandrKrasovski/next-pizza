import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { Header } from "../components/shared";
import "./globals.css";


const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// for CEO:
export const metadata: Metadata = {
  title: "Next Pizza",
  description: "inspired by Archakov Blog, Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
