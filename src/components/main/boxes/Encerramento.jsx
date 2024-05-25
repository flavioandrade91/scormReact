import React from "react";
import styles from './Encerramento.module.css'
import images from './Images'

export function Encerramento({id, texts}) {
    return (
        <main className={styles.enceramentoContainer}>
            <section className={styles.headerContent}>
                <div className={styles.headerTitle}>
                    <div className={styles.title}>
                        <span>ENCERRAMENTO</span>
                    </div>
                    <div className={styles.subtitle}>
                        <span>Tópico Final</span>
                    </div>
                </div>
                <div className={styles.flagBox}>
                    <div className={styles.flag}>
                        <img src={images.flag} alt="Bandeira" />
                    </div>
                </div>
            </section>
            <section className={styles.recapitulandoContent}>
                <header className={styles.header}>
                    <img src={images.livro} alt="" />
                    <p>RECAPITULANDO</p>
                </header>
            </section>
            <p></p>
            <img className={styles.imagesLinhas1} src={images.FormaLinhasPurpleBlack} alt="" srcset="" />
            <img className={styles.imagesLinhas2} src={images.FormaLinhasPurpleBlack} alt="" srcset="" />
            <img className={styles.imagesLinhas3} src={images.FormaLinhasPurpleBlack} alt="" srcset="" />
            <img className={styles.imagesLinhas4} src={images.FormaLinhasPurpleBlack} alt="" srcset="" />
        </main>
    );
}