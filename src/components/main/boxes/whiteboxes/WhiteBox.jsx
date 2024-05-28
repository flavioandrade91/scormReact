import React from "react";
import styles from './WhiteBox.module.css';

export function WhiteBox({ data = [], start = 0, end = data.length }) {
  return (
    <div className={styles.whiteBoxContent}>
      <div className={styles.whiteBox}>
      {data.slice(start, end).map((item, index) => {
        switch (item.type) {
          case 'textTitle01':
            return (
              <p key={index} className={styles.paragTitle}>
                {item.content}
              </p>
            );
          case 'title':
            return (
              <span key={index} className={styles.title}>
                {item.content}
              </span>
            );
          case 'parag':
            return (
              <p key={index} className={styles.parag}>
                {item.content}
              </p>
            );
          default:
            return null;
        }
      })}
      </div>
    </div>
  );
}


