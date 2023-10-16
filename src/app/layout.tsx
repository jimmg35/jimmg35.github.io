"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "I'm Jim. 👏",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, settheme] = useState("light");
  return (
    <html lang="en" data-theme={theme}>
      <head>
        <title>I'm Jim. 👏</title>
      </head>
      <body className={inter.className}>
        {children}
        <div
          onClick={() => {
            settheme("dark");
          }}
        >
          www
        </div>
      </body>
    </html>
  );
}
