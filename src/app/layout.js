import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simulasi Fisika",
  description: "Belajar Fisika dengan Interaktif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navigasi */}
        <nav style={{
          backgroundColor: "#333",
          padding: "1rem",
          display: "flex",
          gap: "1rem",
        }}>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>Beranda</Link>
          <Link href="/about" style={{ color: "white", textDecoration: "none" }}>Tentang</Link>
          <Link href="/profile" style={{ color: "white", textDecoration: "none" }}>Profil</Link>
          <Link href="/products/ohm" style={{ color: "white", textDecoration: "none" }}>Produk: Ohm</Link>
          <Link href="/products/cermin" style={{ color: "white", textDecoration: "none" }}>Produk: Cermin</Link>
          <Link href="/products/gerak-lurus" style={{ color: "white", textDecoration: "none" }}>Produk: Gerak Lurus</Link>
        </nav>

        {/* Isi Halaman */}
        <main>{children}</main>
      </body>
    </html>
  );
}
