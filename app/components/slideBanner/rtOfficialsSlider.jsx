"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./rtOfficialsSlider.module.scss";
import { useEffect, useState } from "react";

const RTOfficialsSlider = () => {
  const [officials, setOfficials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOfficials = async () => {
      try {
        // Ganti URL dengan endpoint API Anda
        const response = await fetch("https://api.example.com/rt-officials");
        if (!response.ok) {
          throw new Error("Gagal mengambil data pengurus");
        }
        const data = await response.json();
        setOfficials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficials();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Memuat data...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pengurus RT</h2>
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          gap: "1rem",
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
            1024: {
              perPage: 3,
            },
            1280: {
              perPage: 4,
            },
          },
        }}
      >
        {officials.map((official) => (
          <SplideSlide key={official.id} className={styles.slide}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  src={official.image || "/images/default-profile.jpg"}
                  alt={official.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{official.name}</h3>
                <p className={styles.position}>{official.position}</p>
                <p className={styles.contact}>
                  <span className={styles.label}>Kontak:</span>{" "}
                  {official.contact}
                </p>
                <p className={styles.period}>
                  <span className={styles.label}>Periode:</span>{" "}
                  {official.period}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default RTOfficialsSlider;
