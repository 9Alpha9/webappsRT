// "use client";

// import { Inter } from "next/font/google";
// import "./globals.css";
// import FooterComp from "./components/footer/footerComp";
// import NavbarComp from "./components/navbarComp/navbar";
// // const inter = Inter({ subsets: ["latin"] });
// import styles from "./global.module.scss";
// import { metadata } from "./metada";
// import { usePathname } from "next/navigation";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   console.log(pathname);
//   const isDashboard = pathname === "/dashboard";
//   return (
//     <html lang="id">
//       <title>{metadata.title.default}</title>
//       <meta name="description" content={metadata.description} />
//       <meta name="keywords" content={metadata.keywords.join(", ")} />
//       <meta name="author" content={metadata.authors[0].name} />
//       <meta property="og:title" content={metadata.openGraph.title} />
//       <meta
//         property="og:description"
//         content={metadata.openGraph.description}
//       />

//       <body>
//         <div className={styles.pageWrapper}>
//           {!isDashboard && <NavbarComp />}
//           <main className={styles.mainContent}>{children}</main>
//           {!isDashboard && <FooterComp />}
//         </div>
//       </body>
//     </html>
//   );
// }
