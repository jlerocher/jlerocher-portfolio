import { ThemeProvider } from "@/lib/providers/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
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
    description: "Portfolio et blog de Jean Le Rocher",
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
        <html lang="en">
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
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
