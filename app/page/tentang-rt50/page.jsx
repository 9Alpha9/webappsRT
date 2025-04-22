import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import ScrollAnimation from "../../components/ScrollAnimation";

export const metadata = {
  title: "Tentang RT 50",
  description:
    "Profil lengkap RT 50: visi, misi, struktur organisasi dan kegiatan warga.",
  openGraph: {
    title: "Tentang RT 50",
    description:
      "Profil lengkap RT 50: visi, misi, struktur organisasi dan kegiatan warga.",
    url: "https://rt50.example.com/tentang-rt50",
    images: [
      {
        url: "https://rt50.example.com/images/about-rt50.jpg",
        alt: "Tentang RT 50",
      },
    ],
  },
  twitter: {
    title: "Tentang RT 50",
    description:
      "Profil lengkap RT 50: visi, misi, struktur organisasi dan kegiatan warga.",
    images: ["https://rt50.example.com/images/about-rt50.jpg"],
  },
};

export default function AboutRT() {
  return (
    <>
      <div className={styles.aboutRtContainer}>
        <ScrollAnimation>
          <div className={styles.aboutRtWrapper}>
            <div className={styles.aboutRtBanner}>
              <Image
                src="https://images.unsplash.com/photo-1533339577339-9007cb316e9c?q=100&w=1920&1080=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1920}
                height={1080}
                quality={100}
                alt=""
              />
            </div>
            <div className={styles.aboutRtContent}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}
