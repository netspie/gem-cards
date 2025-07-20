import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import Footer from "./Footer";
import "./globals.css";
import HomeAppBar from "./HomeAppBar";

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
            {/* <Stack className="fixed w-[2000px] h-[1000px] top-[30%] -left-[25%] bg-red-100 rotate-45 -z-10" /> */}
            <HomeAppBar />
            <div className="flex flex-col h-full">
              <div className="flex flex-col grow-1">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
