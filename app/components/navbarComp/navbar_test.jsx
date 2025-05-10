"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { getCookie } from "../../globalFunction";
import axios from "axios";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();
  const isLoggedIn = !!userProfile;

  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const profile = getCookie("userProfile");
    if (profile) {
      try {
        const parsedProfile = JSON.parse(profile);
        console.log("Parsed profile:", parsedProfile);
        setUserProfile(parsedProfile);
      } catch (error) {
        console.error("Error parsing user profile:", error);
        setUserProfile(null); // reset jika error
      }
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!nik || !password) {
      setError("NIK dan password harus diisi");
      return;
    }

    try {
      const loginData = {
        nik: nik,
        password: password,
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/login",
        loginData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data) {
        const userData = {
          nik: response.data.nik,
          name: response.data.full_name || "", // tambahkan jika ada nama
          // avatar: response.data.avatar || "", // tambahkan jika ada avatar
        };

        // Simpan ke cookie
        setCookie("userProfile", JSON.stringify(userData), { path: "/" });

        setUserProfile(userData); // update state
        router.push("/"); // redirect ke halaman utama
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.log("Error data:", error.response.data);
        setError(
          error.response.data.message ||
            JSON.stringify(error.response.data.errors) ||
            "Terjadi kesalahan saat login"
        );
      } else if (error.request) {
        setError("Tidak dapat terhubung ke server");
      } else {
        setError("Terjadi kesalahan");
      }
    }
  };

  // Menutup menu saat pathname berubah
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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

  const handleLogout = () => {
    // Hapus cookie userProfile
    document.cookie =
      "userProfile=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUserProfile(null);
    router.push("/");
  };

  return (
    <>
      <div className={styles.topNav}>
        <div className={styles.topNavItems}>
          <div className={styles.topNavLeft}>
            <div className={styles.emailInfo}>
              <FontAwesomeIcon icon={faEnvelope} className="w-3  h-3" />
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
              <Link
                href="/#"
                className={`${styles.navLink} ${
                  pathname === "/#" ? styles.active : ""
                }`}
              >
                Ajuan Formulir
              </Link>
              <Link
                href="/#"
                className={`${styles.navLink} ${
                  pathname === "/#" ? styles.active : ""
                }`}
              >
                Aduan Warga
              </Link>
              <Link
                href="/page/tentang-rt50"
                className={`${styles.navLink} ${
                  pathname === "/page/tentang-rt50" ? styles.active : ""
                }`}
              >
                Tentang RT 50
              </Link>
              <div className={styles.loginButtonContainer}>
                {!isLoggedIn ? (
                  <button className={styles.loginButton} onClick={handleLogin}>
                    Login
                  </button>
                ) : (
                  <div className={styles.userProfile}>
                    <div className={styles.avatarContainer}>
                      <FontAwesomeIcon
                        icon={faUser}
                        className={styles.avatar}
                      />
                    </div>
                    <div className={styles.userDropdown}>
                      <span>Welcome, {userProfile?.name}</span>
                      <button
                        onClick={handleLogout}
                        className={styles.logoutButton}
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.navOverlay}>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                  info@kartart50.com
                </span>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>(+62) 123-456-789</span>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
