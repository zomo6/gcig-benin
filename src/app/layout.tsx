import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


export const metadata: Metadata = {
  title: "GCIG BENIN",
  description: "Service d'Entretien et Immobilière",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar/>
        
        <main className=""> {children}</main>

        <Footer/>
      </body>
    </html>
  );
}
