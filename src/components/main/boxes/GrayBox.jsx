import React from 'react';
import styles from './GrayBox.module.css';
import images from '../boxes/Images';

export function GrayBox({ textos, id }) {
    const texto = textos.find(texto => texto.id === id);
    return (
        <section className={styles.boxContainer}>
            <div className={styles.containerflag}>
                <div className={styles.lines}>
                    <div className={styles.lineWhite}></div>
                    <div className={styles.lineOrange}></div>
                </div>
                <div className={styles.boxflag}>
                    <img src={images.flag} alt="Flag" />
                </div>
                <h1 id="introducao">INTRODUÇÃO</h1>
                <div className={styles.introTxt}>
                {textos ? (
                    <p>{texto.texto}</p>
                ):(
                    <p>error</p>
                )}    
                </div>
            </div>
        </section>
    );
}
