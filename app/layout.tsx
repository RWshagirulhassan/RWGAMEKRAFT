import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Rajdhani({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rwgamekraft.com"),
  title: "RW GameKraft",
  description: "Bold, modern game development studio.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RW GameKraft",
    description: "Bold, modern game development studio.",
    url: "/",
    siteName: "RW GameKraft",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "RW GameKraft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RW GameKraft",
    description: "Bold, modern game development studio.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
