import React from "react";
import styles from './WhiteBox.module.css';

export function WhiteBox({ data = [], start = 0, end = data.length }) {
  return (
    <div className={`${styles.whiteBoxContent} accessible-text`}>
      <div className={`${styles.whiteBox} accessible-text`}>
      {data.slice(start, end).map((item, index) => {
        switch (item.type) {
          case 'textTitle01':
            return (
              <p key={index} className={`${styles.paragTitle} accessible-text`}>
                {item.content}
              </p>
            );
          case 'title':
            return (
              <span key={index} className={`${styles.title} accessible-text`}>
                {item.content}
              </span>
            );
          case 'parag':
            return (
              <p key={index} className={`${styles.parag} accessible-text`}>
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


