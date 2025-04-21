import { Inter } from "next/font/google";
import "./globals.css";
import FooterComp from "./components/footer/footerComp";
import NavbarComp from "./components/navbarComp/navbar";
const inter = Inter({ subsets: ["latin"] });
import styles from "./global.module.scss";

export const metadata = {
  title: {
    default: "Website Resmi RT 50",
    template: "%s | RT 50",
  },
  description: "Website Resmi RT 50 – Profil, Agenda & Berita Warga",
  keywords: ["RT50", "RT 50", "agenda warga", "berita RT"],
  authors: [{ name: "Ketua RT 50", url: "https://rt50.example.com" }],
  openGraph: {
    title: "RT 50",
    description: "Website Resmi RT 50 – Profil, Agenda & Berita Warga",
    url: "https://rt50.example.com",
    siteName: "RT 50",
    images: [
      {
        url: "https://rt50.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RT 50 Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RT 50",
    description: "Website Resmi RT 50 – Profil, Agenda & Berita Warga",
    images: ["https://rt50.example.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className={styles.pageWrapper}>
          <NavbarComp />
          <main className={styles.mainContent}>{children}</main>
          <FooterComp />
        </div>
      </body>
    </html>
  );
}
