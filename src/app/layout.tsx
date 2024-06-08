import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Provider from "@/components/provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pozko | Front-end Admin dashboard for posts",
  description: "Front-end Admin dashboard for posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.className)}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
