import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

import { GSAPProvider } from "@/providers/gsap";

import { BOOT_SCRIPT, StartAnimation } from "@/components/start-animation";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  creator: "Elvis Vera",
  title: {
    default: "TioElvis | Elvis Vera - Personal Portfolio",
    template: "%s | TioElvis",
  },
  description:
    "Elvis Vera (TioElvis): backend developer and ethical hacker. Projects, skills and contact.",
  openGraph: {
    type: "website",
    siteName: "TioElvis",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
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
      className={cn(jetBrainsMono.variable)}
      suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <GSAPProvider>
        <body>
          <StartAnimation>{children}</StartAnimation>
        </body>
      </GSAPProvider>
    </html>
  );
}
