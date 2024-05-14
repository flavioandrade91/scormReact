import React from 'react'
import styles from './ImageBox.module.css'

export function ImageBox({link, fonte}) {
  return (
    <>
    <div className={styles.containerBoxImage}>
    </div>
     <span className={styles.fonte}>
        <a href={link}>{fonte}
        </a>
     </span>
     </>
  );
}

