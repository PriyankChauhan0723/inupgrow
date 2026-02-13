import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "INUPGRO - Learn Smarter. Teach Better. Grow Digitally.",
  description: "Inupgro lets students explore, teachers earn, and schools scale – all in one platform designed to evolve with education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
