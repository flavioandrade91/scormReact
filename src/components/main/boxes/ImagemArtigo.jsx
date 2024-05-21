import React from 'react'
import styles from '../boxes/ImagemArtigo.module.css'

export function ImagemArtigo({imagem}) {
  return (
    <div className={styles.ImagemArtigo}>
        <img src={imagem} alt="" />
    </div>
  )
}

