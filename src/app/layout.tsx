import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Logo from "../components/Logo/Logo";
import Link from "next/link";
import { GlobalContextProvider } from "@/context/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz APP Rosialdo",
  description: "Um sistema de Quiz para Ciência da Computação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Link href="/">
            <Logo />
          </Link>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
