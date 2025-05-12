"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import gsap from "gsap";
import TitleGallery from "./titleGallery";

function GalleryLayout() {
  const [isClient, setIsClient] = useState(false);
  const columnRefs = useRef([]);

  const images = [
    "https://images.unsplash.com/photo-1745367228695-a1c7a12df13f?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706278729749-b75f006cdc5b?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1695678835628-2064e409c140?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1738178793923-16ce968ed37b?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1745142640164-74774600af1d?q=80&w=3100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1626707064335-ce7ac5f56134?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744000043352-eabd36a2ecb8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744179211676-f0536705fcd3?q=80&w=2501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698474995697-406c51f60049?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const isMobile = window.innerWidth < 500;

    // Buang kolom lainnya dari ref jika mobile
    columnRefs.current = isMobile
      ? columnRefs.current.slice(0, 1)
      : columnRefs.current.slice(0, 5);

    // Hapus elemen DOM secara langsung jika mobile
    if (isMobile) {
      columnRefs.current.forEach((column, index) => {
        if (index > 0 && column && column.parentNode) {
          column.parentNode.removeChild(column);
        }
      });
    }

    columnRefs.current.forEach((column, index) => {
      const direction = index % 2 === 0 ? -1 : 1;
      const duration = 600;

      gsap.set(column, {
        y: direction === 1 ? "-70%" : "0%",
      });

      gsap.to(column, {
        y: direction === 1 ? "0%" : "-100%",
        duration: duration,
        ease: "none",
        repeat: -2,
        repeatDelay: 0,
        modifiers: {
          y: gsap.utils.unitize((y) => parseFloat(y) % 100),
        },
      });
    });

    return () => {
      gsap.killTweensOf(columnRefs.current);
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.galleryLayout}>
      <div className={styles.galleryLayoutTitle}>
        <TitleGallery />
      </div>
      <div className={styles.galleryLayoutContent}>
        {[...Array(5)].map((_, i) => {
          const shuffledImages = shuffleArray([
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
          ]);

          return (
            <div
              key={i}
              ref={(el) => {
                if (el) columnRefs.current[i] = el;
              }}
              className={styles.galleryLayoutContentImage}
            >
              <div className={styles.galleryColumnTrack}>
                {shuffledImages.map((src, index) => (
                  <div key={index} className={styles.galleryItem}>
                    <Image
                      src={src}
                      alt={`gallery-${index}`}
                      width={480}
                      height={480}
                      quality={100}
                      className={styles.galleryImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GalleryLayout;
