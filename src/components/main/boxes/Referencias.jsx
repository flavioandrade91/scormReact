import React from 'react';
import styles from './Referencias.module.css';

export function Referencias({ referencias }) {
  const half = Math.ceil(referencias.length / 2);
  const firstHalf = referencias.slice(0, half);
  const secondHalf = referencias.slice(half);

  return (
    <div className={styles.ReferenciaContainer}>
      <div className={`${styles.titulo} accessible-text`}>Referências</div>
      <div className={styles.coluna}>
        {firstHalf.map((ref, index) => (
          <div key={index} className={styles.reference_item}>
            <p className={`${styles.reference_name} accessible-text`}>{ref.nome}</p>
            <p className={`${styles.reference_text} accessible-text`}><strong>{ref.texto}</strong></p>
            <a href={ref.link} target="_blank" rel="noopener noreferrer" className={`${styles.reference_link} accessible-text`}>{ref.link}</a>
          </div>
        ))}
      </div>
      <div className={styles.coluna}>
        {secondHalf.map((ref, index) => (
          <div key={index} className={styles.reference_item}>
            <p className={`${styles.reference_name} accessible-text`}>{ref.nome}</p>
            <p className={`${styles.reference_text} accessible-text`}><strong>{ref.texto}</strong></p>
            <a href={ref.link} target="_blank" rel="noopener noreferrer" className={`${styles.reference_link} accessible-text`}>{ref.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
