import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { CursorFollower } from "@/components/cursor-follower";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reed Webster — Strategy, AI & Entrepreneurship",
  description:
    "BYU junior building ventures at the intersection of AI and business. Co-founder of Vanta Marketing and Templar AI.",
  metadataBase: new URL("https://reedwebster.com"),
  openGraph: {
    title: "Reed Webster",
    description:
      "Strategy, AI & Entrepreneurship. Building at the intersection of technology and business.",
    url: "https://reedwebster.com",
    siteName: "Reed Webster",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reed Webster",
    description:
      "Strategy, AI & Entrepreneurship. Building at the intersection of technology and business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSerifDisplay.variable} ${dmSans.variable} ${outfit.variable}`}
    >
      <body className="font-sans antialiased">
        {/* Top accent gradient bar */}
        <div className="fixed top-0 left-0 z-[60] h-[3px] w-full bg-gradient-to-r from-primary via-accent to-primary" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CursorFollower />
          <Nav />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
