import React from "react";
import styles from './Briefing.module.css';

export function Briefing({ id, texts, images }) {
  const briefing = texts && texts.find(briefing => briefing.id === id);

  return (
    <section className={styles.briefing_container}>
      {briefing ? (
        <div className={styles.text_container}>
          <p className="accessible-text"><b>BRIEFING: </b>{briefing.texto}</p>
        </div>
      ) : (
        <p>Erro ao carregar</p>
      )}
      <div className={styles.image_container}>
        <img src={images} alt="A imagem apresenta um círculo composto por peças de quebra-cabeças coloridas com explicações a respeito do briefing." />
        <span className="accessible-text">
          Figura 15 – Briefing. Fonte: <a href="https://www.dmxweb.com.br/importancia-do-briefing-case-criacao-de-uma-marca/" className="accessible-text">DMX Web</a>.
        </span>
      </div>
    </section>
  );
}

export default Briefing;
