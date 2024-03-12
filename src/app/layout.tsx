import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import PageWrapper from "./components/PageWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First Collection",
  description: "Shop products, shoes, bags, etc, at affordable and good rates",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <PageWrapper>{children}</PageWrapper>
        </body>
      </html>
    </>
  );
}
