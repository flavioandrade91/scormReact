import React from 'react'
import styles from './ImageBox.module.css'
import Image from '../../../assets/hatsImage.svg'

export function ImageBox() {
  return (
    <>
    <div className={styles.containerBoxImage}>
    </div>
     <span className={styles.fonte}>Figura 1 – Revista de Moda da Década de 20. Fonte: 
        <a href="https://blogdamaricalegari.com.br/2016/11/20/fatos-e-fotos-da-moda-de-1920-a-1930/">
            da Mari Calegari.
        </a>
     </span>
     </>
  );
}

