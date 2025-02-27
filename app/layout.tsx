import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Navbar from "./components/nav";
import FooterBar from "./components/footer";
import SocialDots from "./components/socialmedia";
// import Image from "next/image";
// import LoadingScreen from "./components/LoadingScreen";
import LoadingScreen from "./components/loadingscreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// const geistSans = localFont({
//   src: "./fonts/Inter.ttf",
//   variable: "--font-inter",
//   weight: "100 900",
// });

const Inter_init = Inter({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-inter",
});

const Roboto_Mono_init = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-roboto-mono",
});

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
      <body className={`${Inter_init.variable} ${Roboto_Mono_init.variable}`}>
        <LoadingScreen />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <div id="portal"></div>
        <FooterBar />
        <div className="indexup">
          <SocialDots />
        </div>
      </body>
    </html>
  );
}
