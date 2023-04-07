import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Providers from "@/components/Providers";

const monts = Montserrat({ subsets: ["latin"], variable: "..fonts-mont" });
export const metadata = {
  title: "Prathamesh's Portfolio ",
  description:
    "Personal portfolio of Prathamesh Tayade, built with Nextjs13 , Tailwindcss and framer motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen w-full bg-light pt-20 text-dark transition-colors duration-300 ease-out  dark:bg-dark dark:text-light  ${monts.className} `}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
