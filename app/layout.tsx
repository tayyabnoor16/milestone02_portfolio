import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tayyab Noor",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
        <Navigation />
    </html>
  );
}
