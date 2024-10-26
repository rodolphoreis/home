import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home sweet home",
  description:
    "Explore e encontre casas à venda em sua região com facilidade. Descubra sua próxima casa com fotos, descrições detalhadas e recursos avançados de busca.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <Head>
        <link rel="icon" href="src/app/favicon.ico" />
      </Head>
      <body className={quickSand.className}>{children}</body>
    </html>
  );
}
