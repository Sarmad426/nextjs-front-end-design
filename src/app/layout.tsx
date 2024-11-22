import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

import { Roboto } from "next/font/google";
import AOSInit from "@/components/aos-init";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "GES",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased p-0 m-0 w-full h-full`}>
        <AOSInit />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
