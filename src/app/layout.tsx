import type { Metadata } from "next";
import { Sofadi_One } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const sofadi = Sofadi_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noor App",
  description: "Your Best Islamic Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sofadi.className}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
