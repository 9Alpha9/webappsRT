"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComp from "./components/footer/footerComp";
// import NavbarComp from "./components/navbarComp/navbar";
import Navbar from "./components/navbarComp/navbar";
import { usePathname } from "next/navigation";
import { MetaData } from "./metada";
const inter = Inter({ subsets: ["latin"] });
import GoogleAnalytics from "./GoogleAnalytics";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = /^\/dashboard(\/.*)?$/.test(pathname);
  const isLogin = /^\/login(\/.*)?$/.test(pathname);
  const isRegister = /^\/register(\/.*)?$/.test(pathname);
  const isNotFound = pathname === "/404" || pathname === "/not-found";

  if (isNotFound) {
    return <>{children}</>;
  }

  return (
    <html lang="id">
      <title>{MetaData.title.default}</title>
      <meta name="description" content={MetaData.description} />
      <meta name="keywords" content={MetaData.keywords.join(", ")} />
      <meta name="author" content={MetaData.authors[0].name} />
      <meta property="og:title" content={MetaData.openGraph.title} />
      <body className={inter.className}>
        {!isDashboard && !isLogin && !isRegister && !isNotFound && <Navbar />}
        <GoogleAnalytics />
        {children}
        {!isDashboard && !isLogin && !isRegister && !isNotFound && (
          <FooterComp />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(d, w, c) {
                    w.BrevoConversationsID = '680e508f8c0224271a04237a';
                    w[c] = w[c] || function() {
                        (w[c].q = w[c].q || []).push(arguments);
                    };
                    var s = d.createElement('script');
                    s.async = true;
                    s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
                    if (d.head) d.head.appendChild(s);
                })(document, window, 'BrevoConversations');
              `,
          }}
        ></script>
        <style jsx global>{`
          .chat-typing__inner {
            display: none !important;
          }
        `}</style>
      </body>
    </html>
  );
}
