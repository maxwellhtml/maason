'use client'
import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./components/partials/Header";
// import "@/app/styles/globals.css";
import "../app/styles/globals.css"
import "../app/styles/style.css"
import "../app/styles/footer.css"
import "../app/styles/custom.css"
import { Inter } from 'next/font/google'
import Footer from "./components/partials/Footer";


 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 

 const metadata: Metadata = {
  title: "WebApp Development",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {/* <style jsx global>{`
    html {
      font-family: ${inter.style.fontFamily};
    }
  `}</style> */}
    <html lang="en" className={inter.className}>
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
    </>
  );
}
