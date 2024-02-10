import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/css/style.css";
import "../../public/css/desktop.css";
import "../../public/css/tablet.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Juan Angel Perez Ochoa",
  description: "Information about my professional life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
