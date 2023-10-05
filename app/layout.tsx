import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";
import RecoilRootWrapper from "@/wrapper/RecoilWrapper";

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
      <RecoilRootWrapper>
        <body className={`${inter.className} bg-purple-50`}>
          <Header />
          <div className="m-12">{children}</div>
          <Footer />
        </body>
      </RecoilRootWrapper>
    </html>
  );
}
