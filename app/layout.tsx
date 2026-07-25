import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "animate.css";
import "../styles/index.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WowInit from "@/components/WowInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Let's Deal Values",
  description:
    "Lets Deal Values combines web development, cloud computing, IT services, and professional training to provide comprehensive digital solutions for businesses.",
  keywords:
    "Let deal, letdealvalue, Let Value, Let's deal value, Let's deal Values",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth!`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          {/* <body className="min-h-full flex flex-col"> */}
          <WowInit>
            <Header />
            {children}
            <Footer />
          </WowInit>
        </Providers>
      </body>
    </html>
  );
}
