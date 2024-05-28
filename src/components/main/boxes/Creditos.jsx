import React from 'react';
import styles from './Creditos.module.css';

export function Creditos({ creditos }) {
  const entries = Object.entries(creditos);
  const half = Math.ceil(entries.length / 2);
  const firstHalf = entries.slice(0, half);
  const secondHalf = entries.slice(half);

  const renderCreditItems = (items) => {
    return items.map(([key, value], index) => (
      <div key={index} className={styles.credit_item}>
        <p><strong>{key}</strong></p>
        {value.map((person, personIndex) => (
          <p key={personIndex}>{person.nome} - {person.cargo}</p>
        ))}
      </div>
    ));
  };

  return (
    <div className={styles.CreditoContainer}>
      <div className={styles.titulo}>Créditos</div>

      <div className={styles.coluna}>
        {renderCreditItems(firstHalf)}
      </div>

      <div className={styles.coluna}>
        {renderCreditItems(secondHalf)}
      </div>
    </div>
  );
}
