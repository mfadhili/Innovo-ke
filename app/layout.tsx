import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import {NextFont} from "next/dist/compiled/@next/font";
import {inter} from "@/app/fonts";


export const metadata: Metadata = {
  title: "Innovo Kenya",
  description: "Innovo Networks Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
