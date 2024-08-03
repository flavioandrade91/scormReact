import React from 'react';
import styles from './Rodape.module.css';
import images from './Images'; // Substitua pelo caminho correto da sua logo

export function Rodape() {
  return (
    <div className={styles.rodapeContainer}>
      <div className={styles.logos}>
        <img src={images.cetiqt} alt="Logo 1" className={styles.logo} />
        <img src={images.senai} alt="Logo 2" className={styles.logo} />
      </div>
    </div>
  );
}
