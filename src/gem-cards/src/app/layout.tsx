import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import HomeAppBar from "./HomeAppBar";
import Footer from "./Footer";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GemCards",
  description: "Best gamified flashcards in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`${publicSans.variable} antialiased flex flex-col w-full h-full`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <HomeAppBar />
            <div className="flex flex-col h-full gap-20">
              <div className="flex flex-col shrink">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
