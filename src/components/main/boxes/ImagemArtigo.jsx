import React from 'react';
import styles from '../boxes/ImagemArtigo.module.css';

export function ImagemArtigo({ id, imagem, fontes, link }) {
  const fonte = fontes && fontes.find(fonte => fonte.id === id);

  return (
    <div className={styles.ImagemArtigo}>
      <img src={imagem} alt="Imagem do Artigo" />
      {fonte ? (
        <a href="" className={link}>{fonte.fonte}</a>
      ) : (
        <p>Erro ao carregar</p>
      )}
    </div>
  );
}
