import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "@/app/globals.css";
import MainAppBar from "./MainAppBar";

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
        className={`${publicSans.variable} antialiased w-full h-full`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <MainAppBar>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </MainAppBar>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
