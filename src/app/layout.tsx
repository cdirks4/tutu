import "./globals.css";
import { Space_Mono, Fira_Code, Righteous } from "next/font/google";
import type { Metadata } from "next";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-righteous",
});

export const metadata: Metadata = {
  title: "Tutu",
  description: "Transform knowledge into catchy tunes that stick!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${firaCode.variable} ${righteous.variable}`}
    >
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
