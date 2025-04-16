"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/nv.module.scss";
import Topbar from "./topbar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300); // Sesuaikan dengan durasi animasi
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      <Topbar />
      <nav className={`${styles.nav} `}>
        <div className={styles.logo}>Logo</div>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className={styles.menuIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div
          className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""} ${
            isClosing ? styles.closing : ""
          }`}
        >
          <Link href="/" className={styles.navLink}>
            Beranda
          </Link>
          <Link href="/ajuan-formulir" className={styles.navLink}>
            Ajuan Formulir
          </Link>
          <button className={styles.loginButton}>Login</button>
        </div>
      </nav>
    </>
  );
}
