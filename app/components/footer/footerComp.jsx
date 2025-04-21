import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function FooterComp() {
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
                    Pengajuan Surat Lamaran Pekerjaan
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
                  <Link className={styles.footerLinksCta} href="/tentang-rt50">
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
                  Ketua RT 50. Copyright &copy; {new Date().getFullYear()} -
                  made By{" "}
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
                    <Link className={styles.footerBottomLinks} href="/#">
                      Privacy Policy
                    </Link>
                  </span>
                  <span className={styles.footerBottomCta}>
                    <Link className={styles.footerBottomLinks} href="/#">
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
