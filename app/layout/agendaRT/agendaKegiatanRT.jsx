import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export const AgendaKegiatanRT = () => {
  const agendaItems = [
    {
      date: "17",
      month: "Agustus",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloribus.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis molestiae, incidunt illum nisi, totam cumque architecto quasi quidem ipsa officia aliquid commodi, modi dignissimos! Maxime voluptatibus ratione minima numquam.",
    },
    {
      date: "17",
      month: "Agustus",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloribus.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis molestiae, incidunt illum nisi, totam cumque architecto quasi quidem ipsa officia aliquid commodi, modi dignissimos! Maxime voluptatibus ratione minima numquam.",
    },
    {
      date: "10",
      month: "November",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloribus.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis molestiae, incidunt illum nisi, totam cumque architecto quasi quidem ipsa officia aliquid commodi, modi dignissimos! Maxime voluptatibus ratione minima numquam.",
    },
    {
      date: "10",
      month: "November",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloribus.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis molestiae, incidunt illum nisi, totam cumque architecto quasi quidem ipsa officia aliquid commodi, modi dignissimos! Maxime voluptatibus ratione minima numquam.",
    },
    {
      date: "31",
      month: "Mei",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloribus.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis molestiae, incidunt illum nisi, totam cumque architecto quasi quidem ipsa officia aliquid commodi, modi dignissimos! Maxime voluptatibus ratione minima numquam.",
    },
    {
      date: "54",
      month: "Januari",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloribus.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis molestiae, incidunt illum nisi, totam cumque architecto quasi quidem ipsa officia aliquid commodi, modi dignissimos! Maxime voluptatibus ratione minima numquam.",
    },

    // Tambahkan item agenda lainnya di sini
  ];

  return (
    <>
      <div className={styles.agendaContainer}>
        <div className={styles.agendaHeader}>
          <span>Agenda Kegiatan Warga</span>
        </div>
        <div className={styles.agendaContent}>
          <div className={styles.agendaCalendar}>
            {agendaItems.map((item, index) => (
              <div className={styles.agendaCalendarWrapper} key={index}>
                <div className={styles.agendaDate}>
                  <span className={styles.agendaDateNumber}>{item.date}</span>
                  <span className={styles.agendaDateMonth}>{item.month}</span>
                </div>
                <div className={styles.agendaWrapper}>
                  <div className={styles.agendaTitle}>{item.title}</div>
                  <div className={styles.agendaDescription}>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
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
