import { ThemeProvider } from "@/lib/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Jean Le Rocher",
    description: "Portfolio de Jean Le Rocher",
    authors: { name: "Jean Le Rocher" },
    keywords:
        "Jean Le Rocher, Portfolio, Blog, NextJS, React, TypeScript, TailwindCSS, Prisma, PostgreSQL, NodeJS, ExpressJS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <main className="sm:px-2 max-w-screen-lg mx-auto px-2 sm:p-0 mt-24">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
