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
        <p className={`${styles.section_title} accessible-text`}><strong>{key}</strong></p>
        {value.map((person, personIndex) => (
          <p key={personIndex} className={`${styles.person_detail} accessible-text`}>
            {person.nome} - <span className={styles.person_cargo}>{person.cargo}</span>
          </p>
        ))}
      </div>
    ));
  };

  return (
    <div className={styles.CreditoContainer}>
      <div className={`${styles.titulo} accessible-text`}>Créditos</div>
      <div className={styles.coluna}>
        {renderCreditItems(firstHalf)}
      </div>
      <div className={styles.coluna}>
        {renderCreditItems(secondHalf)}
      </div>
    </div>
  );
}
