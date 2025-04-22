"use client";

import { useEffect, useState } from "react";

import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function FooterComp() {
  const router = useRouter();
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const pageTransition = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 2, delay: 0.5 },
    };
    router.push(href);
  };

  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerContent}>
            <div className={styles.footerItems}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
              ad.
            </div>
            <div className={styles.footerItems}>
              <div className={styles.footerHeader}>
                <span>Layanan RT</span>
              </div>
              <div className={styles.footerLinks}>
                <span className={styles.footerLinksItem}>
                  <Link className={styles.footerLinksCta} href="/#">
                    Pengajuan Surat Kematian
                  </Link>
                </span>
                <span className={styles.footerLinksItem}>
                  <Link className={styles.footerLinksCta} href="/#">
                    Pengajuan Surat Keterangan Tidak Mampu
                  </Link>
                </span>
                <span className={styles.footerLinksItem}>
                  <Link className={styles.footerLinksCta} href="/#">
                    Pengajuan Surat RT
                  </Link>
                </span>
                <span className={styles.footerLinksItem}>
                  <Link className={styles.footerLinksCta} href="/#">
                    Pengaduan Warga RT
                  </Link>
                </span>
              </div>
            </div>
            <div className={styles.footerItems}>
              <div className={styles.footerHeader}>
                <span>Kontak Person</span>
              </div>
              <div className={styles.footerLinks}>
                <div className={styles.footerKartarPh}>
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                  <span>(+62) 123-456-789</span>
                </div>
                <div className={styles.footerKartarPh}>
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                  <span>info@kartar50.com</span>
                </div>
              </div>
            </div>
            <div className={styles.footerItems}>
              <div className={styles.footerHeader}>
                <span>Informasi RT</span>
              </div>
              <div className={styles.footerLinks}>
                <span>
                  <Link
                    className={styles.footerLinksCta}
                    href="/page/tentang-rt50"
                  >
                    Ruang Lingkup Kehidupan RT 50
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomWrapper}>
            <div className={styles.footerBottomContent}>
              <div className={styles.footerBootomItems}>
                <span>
                  Website ini seluruhnya dikelolah oleh Karang Taruna RT 50 dan
                  Ketua RT 50. Copyright &copy; {year} - made By {""}
                  <Link
                    href="https://www.bagian.net"
                    target="_blank"
                    className={styles.footerBottomLinks}
                  >
                    Bagian Projects
                  </Link>
                </span>
              </div>
              <div className={styles.footerBootomItems}>
                <div className={styles.footerLinkWrapper}>
                  <span className={styles.footerBottomCta}>
                    <Link
                      className={styles.footerBottomLinks}
                      href="/page/privacy-policy"
                      onClick={(e) =>
                        handleLinkClick(e, "/page/privacy-policy")
                      }
                    >
                      Privacy Policy
                    </Link>
                  </span>
                  <span className={styles.footerBottomCta}>
                    <Link
                      className={styles.footerBottomLinks}
                      href="/terms-and-conditions"
                    >
                      Terms & Condition
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
