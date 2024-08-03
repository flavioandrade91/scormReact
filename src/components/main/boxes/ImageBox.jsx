import React from 'react';
import styles from './ImageBox.module.css';

export function ImageBox({ id, fontes, imagem }) {
  const fonte = fontes && fontes.find(fonte => fonte.id === id);

  return (
    <>
      {fontes ? (
        <div className={styles.containerBoxImage}>
          <img src={imagem} alt={fonte.descricao} />
          <div className={styles.footer}>
            {fonte ? (
              <span className={`${styles.fonte} accessible-text`}>
                <a href={fonte.link} className="accessible-text" target='_blank'>{fonte.fonte}</a>
              </span>
            ) : (
              <span className={`${styles.fonte} accessible-text`}>Fonte não encontrada</span>
            )}
          </div>
        </div>
      ) : (
        <p>Erro ao carregar</p>
      )}
    </>
  );
}
