import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";


const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],//font weight
});

export const metadata = {
  title: "RK Property Hub | Real Estate Consultants in Delhi NCR",
  description: "RK Property Hub offers trusted residential, commercial, and industrial real estate services across Delhi NCR.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jost.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
