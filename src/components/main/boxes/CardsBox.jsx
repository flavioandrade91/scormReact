import React from "react";
import styles from './CardsBox.module.css';

const getRandomBoxIndex = (length) => {
    return Math.floor(Math.random() * length);
};

const getBgColorByIndex = (index) => {
    switch(index) {
        case 0: return '#6F2282';
        case 1: return '#CCCCCC';
        case 2: return '#FFCC00';
        default: return '#eeeeee';
    }
};

export function CardsBox({ id, textId, cards }) {
    const card = cards && cards.find(card => card.id === id);
    const textItem = card && card.text.find(text => text.id === textId);

    if (!card || !textItem) {
        return <p>Erro ao carregar</p>;
    }

    const randomBoxIndex = getRandomBoxIndex(card.box.length);

    return (
        <section className={styles.cardContainer}>
            <div className={styles.cardsBox}>
                {card.box.map((boxItem, index) => (
                    <div 
                        key={boxItem.id} 
                        className={styles.cardBox}
                        style={{ backgroundColor: index === randomBoxIndex ? getBgColorByIndex(index) : '#eeeeee' }}
                    >
                        <span>{boxItem.content}</span>
                    </div>
                ))}
                <div className={styles.cardContent}>
                    <p>{textItem.content}</p>
                </div>
            </div>
        </section>
    );
}
