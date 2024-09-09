import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name}: Free Meals - Free Breakfast Item`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Meal kit delivery",
    "Fresh ingredients",
    "Easy recipes",
    "Home cooking",
    "Convenient meals",
    "Quality ingredients",
    "Subscription service",
    "Healthy eating",
    "Culinary experience",
    "Time-saving cooking",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            {/* <Navbar /> */}
            <main
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/bg.jpg')" }}
            >
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
