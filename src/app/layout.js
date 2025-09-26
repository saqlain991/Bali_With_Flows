import { Geist, Geist_Mono, Inter,Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",  
  subsets: ["latin"],
});
const outfit = Outfit({
  variable: "--font-outfit",  // Custom CSS variable for Outfit font
  subsets: ["latin"],
});


export const metadata = {
  title: "BaliwithFlow",
  description: "A landing page for BaliwithFlow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
