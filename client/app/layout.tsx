import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryClientProvider from "@/providers/query-client.provider";
import { Toaster } from "react-hot-toast";
import Nav from "@/components/client/navbar";
import Footer from "@/components/client/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce | Home",
  description: "Ecommerce app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col min-h-screen">
        <Nav />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
