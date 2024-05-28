import React from "react";
import styles from './CardsBox.module.css';

export function CardsBox({ id, textId, cards }) {
    const card = cards && cards.find(card => card.id === id);
    const textItem = card && card.text.find(text => text.id === textId);

    return (
        <section className={styles.cardContainer}>
            <div className={styles.cardsBox}>
                {card ? (
                    <div className={styles.cards}>
                        {card.box.map((boxItem) => (
                            <div key={boxItem.id} className={styles.cardItem}>
                                <span>{boxItem.content}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Erro ao carregar</p>
                )}

                {textItem ? (
                    <div className={styles.cardContent}>
                        <p>{textItem.content}</p>
                    </div>
                ) : (
                    <p>Erro ao carregar</p>
                )}
            </div>
        </section>
    );
}
