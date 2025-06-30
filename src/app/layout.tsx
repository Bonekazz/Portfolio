import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
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
  description: 'My custom preview for social media!',
  openGraph: {

    title: "Portfolio | Hierro Fernandes",
    description: 'My custom preview for social media!',
    images: ["/preview.jpg"],
  },
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
