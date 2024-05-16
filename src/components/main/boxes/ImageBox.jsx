import React from 'react'
import styles from './ImageBox.module.css'

export function ImageBox({ link, fonte, imagem }) {
  return (
    <>
      <div className={styles.containerBoxImage}>
        <img src={imagem} alt="" />
        <div className={styles.footer}>
          <span className={styles.fonte}>
            <a href={link}>{fonte}
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

