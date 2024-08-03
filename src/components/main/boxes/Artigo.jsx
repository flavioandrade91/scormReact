import React from 'react';
import styles from './Artigo.module.css';
import images from './Images';

export function Artigo({ artigos }) {
  return (
    <div className={styles.artigoBody}>
      <section className={`${styles.grid_container} accessible-text`}>
        {artigos.map((data, index) => (
          <div
            key={data.id}
            className={`${styles.grid_item} ${index === artigos.length - 1 ? styles.center_item : ''}`}
          >
            <p className="accessible-text">{data.text}</p>
            <img src={images[data.imageName]} alt={data.descricao} />
            <a href={data.url} className="accessible-text">{data.fonte}</a>
          </div>
        ))}
      </section>
    </div>
  );
}
