import React from "react";
import styles from './CardsBox.module.css'

export function CardsBox() {
    return (
        <section className={styles.cardContainer}>
            <div className={styles.cardsBox}>
                <div className={styles.cardBox1}><span>Recursos</span></div>
                <div className={styles.cardBox2}><span>Exposição de produtos</span></div>
                <div className={styles.cardBox3}><span>Projetos de Imagem</span></div>
                <div className={styles.cardContent}><p>Cada um com   uma funcionalidade diferente, que se adequa a finalidade desejada.</p></div>
            </div>
        </section>
    );
}