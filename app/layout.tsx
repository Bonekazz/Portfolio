import type { Metadata } from "next";
import { Roboto_Mono, Geist } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { cn } from "@/lib/utils";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const FontRobotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose weights you need
  variable: '--font-roboto-mono', // for Tailwind CSS usage
});
const FontRoboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose weights you need
  variable: '--font-roboto-mono', // for Tailwind CSS usage
});

export const metadata: Metadata = {
  title: "Portfolio | Hierro Fernandes",
  description: "Veja os trabalhos feitos por Hierro Fernandes durante sua carreira como desenvolvedor de software.",
  openGraph: {
    title: "Portfolio | Hierro Fernandes",
    description: "Veja os trabalhos feitos por Hierro Fernandes durante sua carreira como desenvolvedor de software.",
    url: "https://hierrofernandes.vercel.app",
    siteName: "Portfolio | Hierro Fernandes",
    images: [
      {
        
        url: "/preview.jpg",
        width: 1200,
        height: 630,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(FontRobotoMono.variable, FontRoboto.variable, "font-sans", geist.variable)}>
      <Head>
        <meta property="og:title" content="Portfolio | Hierro Fernandes" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      <body
        className={`font-robotoMono bg-white`}
      >
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
