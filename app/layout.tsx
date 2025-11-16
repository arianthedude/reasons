import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: "../public/TitrZebr.ttf",
      weight: "400",
      style: "normal",
    },
   
  ],
  variable: "--font-myfont",
});


export const metadata: Metadata = {
  title: "Reasons for schatz",
  description: "Ich liebe dich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${myFont.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
