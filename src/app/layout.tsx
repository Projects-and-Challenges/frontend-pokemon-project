import Footer from "@/components/Footer";
import "../../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokemon",
  description: "Pokemon App",
  charset: "utf-8",
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
