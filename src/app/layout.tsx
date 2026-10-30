import "./globals.css";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";

import { cn } from "@/lib/utils";
import { SITE, SITE_URL } from "@/lib/site";

import { GSAPProvider } from "@/providers/gsap";

import { BOOT_SCRIPT, StartAnimation } from "@/components/start-animation";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author, url: SITE_URL }],
  creator: SITE.author,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
    firstName: "Elvis",
    lastName: "Vera",
    username: "TioElvis",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  keywords: [
    "Elvis Vera",
    "TioElvis",
    "backend developer",
    "ethical hacker",
    "cybersecurity",
    "Node.js",
    "NestJS",
    "Next.js",
    "portfolio",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  colorScheme: "dark",
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
