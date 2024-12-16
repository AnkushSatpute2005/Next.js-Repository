import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Admin Facebook",
  description: "i am Admin Facebook-conecting people with the world",
};

export default function RootLayout({ children }) {
  return (
    <div>
        <span> Admin Navbar</span>
        {children}
    </div>
    
  );
}