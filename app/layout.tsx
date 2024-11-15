import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "@/components/google-analytics";
import { CookieConsent } from "@/components/cookie-consent";

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
  title: "TaskEase - Transform Big Projects into Manageable Steps",
  description: "TaskEase uses AI to break down your complex tasks into simple, actionable subtasks. Get more done with less stress.",
  icons: {
    icon: 'favicon.ico',
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
        <GoogleAnalytics />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen justify-center`}
      >
        <main className="w-full max-w-7xl">
          {children}
        </main>
        <CookieConsent />
      </body>
    </html>
  );
}
