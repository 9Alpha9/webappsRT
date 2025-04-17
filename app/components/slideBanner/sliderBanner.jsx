"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./slide.styles.module.scss";

const SliderBanner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1741761446510-7804410eade3?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1741513543210-c17d608be117?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1742827871480-4962b0653e1d?q=80&w=3568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1683009427666-340595e57e43?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 5000,
          speed: 1600,
          pauseOnHover: false,
          arrows: true,
          perPage: 1,
          gap: "0.8rem",
          pagination: false,
          classes: {
            pagination: styles.splidePagination,
            page: styles.splidePage,
          },
        }}
        aria-label="Slider Banner"
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id} className={styles.slideWrapper}>
            <div className={styles.slideContent}>
              <div className={styles.imageContainer}>
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className={styles.slideImage}
                  loading="lazy"
                  //   onError={(e) => {
                  //     console.error(`Error loading image ${slide.id}:`, e);
                  //     e.target.src =
                  //       "https://images.unsplash.com/photo-1683009427666-340595e57e43?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                  //   }}
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SliderBanner;
