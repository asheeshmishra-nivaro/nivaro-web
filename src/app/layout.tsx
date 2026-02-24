import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Nivaro Health Technologies – Structured Rural Healthcare Infrastructure",
    description: "Nivaro Health Technologies builds a digitally governed rural primary care operating system integrating clinical governance, prescription-linked inventory, and real-time monitoring.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-inter antialiased`}>
                <Navbar />
                <main className="pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
