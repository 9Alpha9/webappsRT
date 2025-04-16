"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      <div className={styles.topNav}>
        <div className={styles.topNavLeft}>
          <div className={styles.emailInfo}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>info@kartart50.com</span>
          </div>
          <div className={styles.phoneInfo}>
            <FontAwesomeIcon icon={faPhone} />
            <span>(+62) 123-456-789</span>
          </div>
        </div>
        <div className={styles.topNavRight}>KARTAR RT50</div>
      </div>

      <nav className={styles.nav}>
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
