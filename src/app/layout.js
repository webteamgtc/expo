import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Meet Me at iFX Expo 2025 | GTC",
  description: "We’re joining iFX Expo 2025 this June and we’d love to connect with you. Whether you’re a broker, affiliate, or just exploring new opportunities, let’s chat and see how we can grow together.",
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
