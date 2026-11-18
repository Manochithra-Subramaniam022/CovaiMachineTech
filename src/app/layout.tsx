import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.covaimachinetech.com'),
  title: "CovaiMachineTech - Precision CNC Machining Solutions",
  description: "CovaiMachineTech offers high-quality CNC machining solutions with advanced technology and precision manufacturing in Coimbatore, Tamil Nadu.",
  alternates: {
    canonical: 'https://www.covaimachinetech.com/',
  },
  openGraph: {
    title: "CovaiMachineTech - Precision CNC Machining Solutions",
    description: "CovaiMachineTech offers high-quality CNC machining solutions with advanced technology and precision manufacturing in Coimbatore, Tamil Nadu.",
    url: 'https://www.covaimachinetech.com/',
    siteName: 'Covai Machine Tech',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
