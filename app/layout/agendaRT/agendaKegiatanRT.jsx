import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export const AgendaKegiatanRT = () => {
  return (
    <>
      <div className={styles.agendaContainer}>
        <div className={styles.agendaHeader}>
          <span>Agenda Kegiatan Warga RT 50</span>
        </div>
        <div className={styles.agendaContent}>
          <div className={styles.agendaCalendar}>
            <div className={styles.agendaDate}>
              <span className={styles.agendaDateNumber}>31</span>
              <span className={styles.agendaDateMonth}>Januari</span>
            </div>
            <div className={styles.agendaWrapper}>
              <div className={styles.agendaTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                doloribus.
              </div>
              <div className={styles.agendaDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                nobis molestiae, incidunt illum nisi, totam cumque architecto
                quasi quidem ipsa officia aliquid commodi, modi dignissimos!
                Maxime voluptatibus ratione minima numquam.
              </div>
            </div>
          </div>
          <div className={styles.agendaBanner}>
            <Image
              src="https://images.pexels.com/photos/16258090/pexels-photo-16258090/free-photo-of-mixology-beverages.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className={styles.agendaBannerParagraph}>
              "Sugeng rawuh, mugi tansah pinaringan wilujeng lan kamulyan
              sedaya."
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
