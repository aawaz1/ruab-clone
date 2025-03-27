import { Geist, Geist_Mono } from "next/font/google";
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
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
  title: "Welcome to TPC",
  description: "Compressed image file size in less than 50 kb without losing quality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.className} ${geistMono.className} antialiased`}
      >
        
       
         
        {children}
      
     
      </body>
    </html>
  );
}
