"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
  faSortAlphaDesc,
  faSortDesc,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { getCookie } from "../../globalFunction";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Ambil cookie full_name saat pertama kali komponen dimuat
  useEffect(() => {
    const cookieName = getCookie("full_name");
    if (cookieName) {
      const shortName = cookieName.split(" ").slice(0, 2).join(" ");
      setFullName(shortName);
      // setFullName(cookieName);
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    document.cookie =
      "full_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setFullName("");
    router.push("/");
  };

  // Toggle menu responsive
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

  // Tutup menu saat ganti halaman
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.topNav}>
        <div className={styles.topNavItems}>
          <div className={styles.topNavLeft}>
            <div className={styles.emailInfo}>
              <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />
              <span>info@kartart50.com</span>
            </div>
            <div className={styles.phoneInfo}>
              <FontAwesomeIcon icon={faPhone} className="w-3 h-3" />
              <span>(+62) 123-456-789</span>
            </div>
          </div>
          <div className={styles.topNavRight}>KARTAR RT50</div>
        </div>
      </div>

      <div className={styles.navContainer}>
        <div className={styles.navContent}>
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
              className={`${styles.navLinks} ${
                isMenuOpen ? styles.active : ""
              } ${isClosing ? styles.closing : ""}`}
            >
              <Link
                href="/"
                className={`${styles.navLink} ${
                  pathname === "/" ? styles.active : ""
                }`}
              >
                Beranda
              </Link>
              <Link href="/#" className={styles.navLink}>
                Ajuan Formulir
              </Link>
              <Link href="/#" className={styles.navLink}>
                Aduan Warga
              </Link>
              {/* <Link href="/page/tentang-rt5" className={styles.navLink}>
                Tentang RT 50
              </Link> */}
              <Link
                href="/page/tentang-rt50"
                className={`${styles.navLink} ${
                  pathname === "/page/tentang-rt50" ? styles.active : ""
                }`}
              >
                Tentang RT 50
              </Link>

              <div className={styles.loginButtonContainer}>
                {!fullName ? (
                  <button
                    className={styles.loginButton}
                    onClick={() => {
                      window.location.replace("/login");
                    }}
                  >
                    Login
                  </button>
                ) : (
                  <div className={styles.userProfile}>
                    <div
                      className={styles.userWrapper}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <div className={styles.avatarContainer}>
                        <FontAwesomeIcon
                          icon={faUser}
                          className={styles.avatar}
                        />
                      </div>
                      <span className={styles.userName}>
                        Hi, {fullName}
                        <FontAwesomeIcon
                          icon={faSortDesc}
                          className="relative -top-[.2rem] ml-2"
                        />
                      </span>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            className={styles.userDropdown}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="/dashboard"
                              className={styles.dropdownLink}
                            >
                              <span className={styles.dropdownName}>
                                Dashboard Saya
                              </span>
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.navOverlay}>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} /> info@kartart50.com
                </span>
                <span>
                  <FontAwesomeIcon icon={faPhone} /> (+62) 123-456-789
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
