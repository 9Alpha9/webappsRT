"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./rtOfficialsSlider.module.scss";
import { useEffect, useState } from "react";
import { createClient } from "pexels";

const RTOfficialsSlider = () => {
  const [officials, setOfficials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOfficials = async () => {
      try {
        const client = createClient(
          'https://api.unsplash.com/search/photos?query=${query}&per_page=10&page=4&client_id=L6ijMiZe7ahs72zIf6nqvFK4bOY1ZIZSWoYCvKu2YhLtLY5HlQSi5sfq"'
        );
        const officialsData = [
          {
            id: 1,
            name: "Budi Santoso",
            position: "Ketua RT",
            phone: "081234567890",
            email: "budi@example.com",
            period: "2023-2025",
            query: "professional asian man portrait",
          },
          {
            id: 2,
            name: "Ani Wijaya",
            position: "Wakil Ketua RT",
            phone: "081234567891",
            email: "ani@example.com",
            period: "2023-2025",
            query: "professional asian woman portrait",
          },
          {
            id: 3,
            name: "Dedi Kurniawan",
            position: "Sekretaris 1",
            // phone: "081234567892",
            email: "dedi@example.com",
            period: "2023-2025",
            query: "business asian man portrait",
          },
          {
            id: 4,
            name: "Rina Fitriani",
            position: "Sekretaris 2",
            // phone: "081234567893",
            email: "rina@example.com",
            period: "2023-2025",
            query: "security asian woman portrait",
          },
          {
            id: 5,
            name: "Ahmad Fauzi",
            position: "Bendahara",
            // phone: "081234567894",
            email: "ahmad@example.com",
            period: "2023-2025",
            query: "asian man cleaning portrait",
          },
          {
            id: 6,
            name: "Siti Rahayu",
            position: "Seksi Keagamaan",
            // phone: "081234567895",
            email: "siti@example.com",
            period: "2023-2025",
            query: "asian woman nurse portrait",
          },
          {
            id: 7,
            name: "Danang Aditya",
            position: "Seksi Kesejahteraan Sosial",
            // phone: "081234567895",
            email: "siti@example.com",
            period: "2023-2025",
            query: "asian woman nurse portrait",
          },
          {
            id: 8,
            name: "Ramlan Oktavia",
            position: "Seksi Pembangunan ",
            // phone: "081234567895",
            email: "siti@example.com",
            period: "2023-2025",
            query: "asian woman nurse portrait",
          },
          {
            id: 9,
            name: "Rani Adi",
            position: "Seksi Pemberdayaan",
            // phone: "081234567895",
            email: "siti@example.com",
            period: "2023-2025",
            query: "asian woman nurse portrait",
          },
          {
            id: 10,
            name: "Jamil Harun",
            position: "Seksi Keamanan",
            // phone: "081234567895",
            email: "siti@example.com",
            period: "2023-2025",
            query: "asian woman nurse portrait",
          },
        ];

        const officialsWithImages = await Promise.all(
          officialsData.map(async (official) => {
            try {
              const response = await client.photos.search({
                query: official.query,
                per_page: 10,
                orientation: "portrait",
                size: "large",
              });

              const randomIndex = Math.floor(
                Math.random() * response.photos.length
              );
              const imageUrl =
                response.photos[randomIndex]?.src?.large2x ||
                response.photos[randomIndex]?.src?.large ||
                "/images/default-profile.jpg";

              return {
                ...official,
                image: imageUrl,
              };
            } catch (err) {
              console.error(`Error fetching image for ${official.name}:`, err);
              return {
                ...official,
                image: "/images/default-profile.jpg",
              };
            }
          })
        );

        setOfficials(officialsWithImages);
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
    <>
      <div className={`${styles.pengurusContainer}`}>
        <div className={`${styles.pengurusHeader}`}>
          <h1>Pengurus RT 50</h1>
          <p>
            Wilujeng rawuh ing papan digital bebrayan kita, mugi ndadosaken
            manfaat tumrap sedaya warga.
          </p>
        </div>
        <div className={styles.pengurusContent}>
          <Splide
            options={{
              type: "loop",
              perPage: 4,
              perMove: 1,
              gap: "0.5rem",
              padding: "0.5rem",
              interval: 3200,
              pagination: false,
              autoplay: true,
              pauseOnHover: true,
              trimSpace: false,
              breakpoints: {
                640: {
                  perPage: 1,
                  gap: "0.3rem",
                  padding: "0.3rem",
                },
                768: {
                  perPage: 2,
                  gap: "0.4rem",
                  padding: "0.4rem",
                },
                1024: {
                  perPage: 3,
                  gap: "0.5rem",
                  padding: "0.5rem",
                },
                1280: {
                  perPage: 4,
                  gap: "0.5rem",
                  padding: "0.5rem",
                },
              },
            }}
          >
            {officials.map((official) => (
              <SplideSlide key={official.id} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <img
                      src={official.image}
                      alt={official.name}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{official.name}</h3>
                    <p className={styles.position}>{official.position}</p>
                    {/* <p className={styles.contact}>
                        <span className={styles.label}>Kontak:</span>{" "}
                        {official.phone}
                      </p> */}
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
      </div>
    </>
  );
};

export default RTOfficialsSlider;
