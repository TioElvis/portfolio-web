import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  creator: "Elvis Vera",
  title: {
    default: "TioElvis | Elvis Vera - Personal Portfolio",
    template: "%s | TioElvis",
  },
  description: "Personal portfolio created by Elvis Vera (TioElvis).",
  keywords: [
    "Elvis Vera",
    "TioElvis",
    "Software Development",
    "Personal blog",
    "Portfolio",
    "Programming",
    "Cybersecurity",
    "Backend",
  ],
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html
      lang="en"
      className={cn(cormorantGaramond.variable, jetBrainsMono.variable)}>
      <body>{children}</body>
    </html>
  );
}
