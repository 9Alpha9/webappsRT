"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComp from "./components/footer/footerComp";
import NavbarComp from "./components/navbarComp/navbar";
import { usePathname } from "next/navigation";
import { MetaData } from "./metada";
const inter = Inter({ subsets: ["latin"] });
import GoogleAnalytics from "./GoogleAnalytics";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = /^\/dashboard(\/.*)?$/.test(pathname);
  const isLogin = /^\/login(\/.*)?$/.test(pathname);
  const isRegister = /^\/register(\/.*)?$/.test(pathname);

  return (
    <html lang="id">
      <title>{MetaData.title.default}</title>
      <meta name="description" content={MetaData.description} />
      <meta name="keywords" content={MetaData.keywords.join(", ")} />
      <meta name="author" content={MetaData.authors[0].name} />
      <meta property="og:title" content={MetaData.openGraph.title} />
      <meta
        property="og:description"
        content={MetaData.openGraph.description}
      />
      <body className={inter.className}>
        {!isDashboard && !isLogin && !isRegister && <NavbarComp />}
        <GoogleAnalytics />
        {children}
        {!isDashboard && !isLogin && !isRegister && <FooterComp />}
      </body>
    </html>
  );
}
