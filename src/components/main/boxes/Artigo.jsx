import React from 'react';
import styles from './Artigo.module.css';
import images from './Images';

export function Artigo({ artigos }) {
  return (
    <section className={styles.grid_container}>
         {artigos.map((data, index) => (
        <div
          key={data.id}
          className={`${styles.grid_item} ${index === artigos.length - 1 ? styles.center_item : ''}`}
        >
          <p>{data.text}</p>
          <img src={images[data.imageName]} alt={data.descricao} />
          <a href={data.url}>{data.fonte}</a>
        </div>
      ))}
    </section>
  );
};

