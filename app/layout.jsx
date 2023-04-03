import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const monts = Montserrat({ subsets: ["latin"], variable: "..fonts-mont" });
export const metadata = {
  title: "Prathamesh's Portfolio ",
  description: "Personal portfolio of Prathamesh Tayade, Web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen w-full bg-light dark:bg-dark  ${monts.className} `}
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
