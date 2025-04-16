import React from "react";
import styles from "./styles.module.scss";

export default function ClanRT() {
  return (
    <>
      <div className={`${styles.pengurusContainer}`}>
        <div className={`${styles.pengurusHeader}`}>
          <span>Pengurus RT</span>
        </div>
        <div className={`${styles.pengurusContent}`}></div>
      </div>
    </>
  );
}
