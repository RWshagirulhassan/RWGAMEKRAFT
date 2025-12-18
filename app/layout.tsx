import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Rajdhani({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"], // use full weight range
});

export const metadata: Metadata = {
  title: "Game Studio Landing",
  description: "Bold, modern landing page for a game development studio.",
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
