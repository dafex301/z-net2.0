import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenius 2.0 Alpha",
  description: "Cobacobaa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Header />
        <div className="m-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
