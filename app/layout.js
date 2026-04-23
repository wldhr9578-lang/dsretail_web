import "./globals.css";
import { Inter, Noto_Sans_KR } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansKr = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto" });

export const metadata = {
  title: "DS Retail | Korea ODM Paper Manufacturer",
  description: "DS Retail is a Korea-based ODM manufacturer of premium paper products for global B2B buyers."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansKr.variable} bg-primary text-ink`}>{children}</body>
    </html>
  );
}
