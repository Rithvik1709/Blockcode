import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "./providers";
import { SessionWrapper } from "./SessionWrapper";
import SupportDropdown from "@/components/landing-sections/SupportDropdown";
import { TRPCProvider } from "@/providers/trpc-provider";

const dmReg = localFont({
  src: "./fonts/DMMono-Regular.ttf",
  variable: "--font-dm-mono-req",
});

const dmMed = localFont({
  src: "./fonts/DMMono-Medium.ttf",
  variable: "--font-dm-mono-med",
});

export const metadata: Metadata = {
  title: "Blockcode",
  description: "Ace Blockchain problems by coding them out.",
  icons: {
    icon: "/images/os-image.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmMed.variable} ${dmReg.variable} antialiased bg-background`}
      >
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SessionWrapper>
              <TRPCProvider>{children}</TRPCProvider>
            </SessionWrapper>
          </ThemeProvider>
        </PostHogProvider>
        <Analytics />
        <SpeedInsights />
        <SupportDropdown />
      </body>
    </html>
  );
}
