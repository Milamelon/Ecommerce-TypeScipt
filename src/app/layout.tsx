import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { CarProvider } from "@/context/CarContext";
import {Toaster} from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sweet Delights",
  description: "Tienda de postres y helados artesanales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <AuthProvider>
        <CarProvider>
        <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" richColors />
          </body>
        </CarProvider>
      </AuthProvider>
    </html>
  );
}
