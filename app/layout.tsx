import type { Metadata } from "next";
import { quicksand } from "@/app/components/fonts";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Newton Kamau",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`relative ${quicksand.className} antialiased bg-light1 text-[#000000] dark:bg-dark1 dark:text-[#fefefe] sm:w-full mx-2 overflow-x-hidden`}
      >
        <Providers>
          <Navbar />
          {children}

          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
