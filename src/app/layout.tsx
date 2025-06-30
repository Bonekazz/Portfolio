import type { Metadata } from "next";
import { Roboto_Mono, Roboto } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${FontRobotoMono.variable} ${FontRoboto.variable}`}>
      <body
        className={`font-robotoMono bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
