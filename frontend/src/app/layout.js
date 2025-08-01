import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hire Now Limited",
  description: "Powered by Next.js & Strapi Cloud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ⬇ Loads every weight/style for ITC Eras in a single file */}
        <link
          href="https://fonts.cdnfonts.com/css/itc-eras-ultra"
          rel="stylesheet"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
