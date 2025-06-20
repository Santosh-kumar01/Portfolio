import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navebar from "@/components/Navebar/Navebar";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Santosh Kumar",
  description: "My awesome portfolio website",
 

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navebar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
