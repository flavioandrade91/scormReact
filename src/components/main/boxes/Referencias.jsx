import React from 'react'
import styles from './Referencias.module.css'

export function Referencias({ referencias }) {
  const half = Math.ceil(referencias.length / 2);
  const firstHalf = referencias.slice(0, half);
  const secondHalf = referencias.slice(half);

  return (
    <div className={styles.ReferenciaContainer}>
      <div className={styles.coluna}>
        {firstHalf.map((ref, index) => (
          <div key={index} className={styles.reference_item}>
            <p><strong>{ref.nome}</strong></p>
            <p>{ref.texto}</p>
            <a href={ref.link} target="_blank" rel="noopener noreferrer">{ref.link}</a>
          </div>
        ))}
      </div>

      <div className={styles.coluna}>
        {secondHalf.map((ref, index) => (
          <div key={index} className={styles.reference_item}>
            <p><strong>{ref.nome}</strong></p>
            <p>{ref.texto}</p>
            <a href={ref.link} target="_blank" rel="noopener noreferrer">{ref.link}</a>
          </div>
        ))}
      </div>
    </div>
  )
}