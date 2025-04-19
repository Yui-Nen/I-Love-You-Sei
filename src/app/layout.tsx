import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Happy Birthday Ganda",
  description: "Birthday Letter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-[#F2D9EF]`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
