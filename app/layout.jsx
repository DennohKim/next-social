import Nav from './auth/Nav'
import './globals.css'
import { Outfit } from "@next/font/google";
import QueryWrapper from './auth/QueryWrapper';

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`mx-4 md:mx-48 xl:mx-96 ${outfit.variable} bg-gray-200`}>
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
