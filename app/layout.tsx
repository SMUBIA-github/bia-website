import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/nav";
import FooterBar from "./components/footer";

const geistSans = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

const Inter_init = Inter({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-inter',
})

const Roboto_Mono_init = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: "SMUBIA",
  description: "Created by BIA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Inter_init.variable} ${Roboto_Mono_init.variable}`}
      >
        <Navbar />
        {children}
        <FooterBar />
      </body>
    </html> 
  );
}
