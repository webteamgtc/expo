import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Grow with us at iFX Expo 2025 and experience real talk and real results.",
  description: "We’ll be at iFX Expo 2025 and would love to connect with you. Let’s have real conversations and share ideas that help you grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
