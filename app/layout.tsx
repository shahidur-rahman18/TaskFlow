import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import WrapperNav from "@/components/Home/Navbar/WrapperNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Rubik({
  weight :["300","400","500","700","800","900"],
  subsets:["latin"]
});


export const metadata: Metadata = {
  title: "Next JS Landing Page",
  description: "A modern landing page built with Next.js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >  <WrapperNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
