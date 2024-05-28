import React, { useState } from 'react';
import styles from './Sanfona.module.css';

export function Sanfona({ sanfonas, iconImage, start, end }) {
    const itemsToRender = sanfonas.slice(start, end);
    const [expandedItems, setExpandedItems] = useState(new Array(itemsToRender.length).fill(false));

    const toggleModal = (index) => {
        setExpandedItems(prev => {
            const newExpandedItems = [...prev];
            newExpandedItems[index] = !newExpandedItems[index];
            return newExpandedItems;
        });
    };

    return (
        <div className={styles.sanfonaContainer}>
            {itemsToRender.map((sanfona, index) => (
                <div key={sanfona.id}  className={styles.sanfonaContent}>
                    <div className={styles.headerSanfona}>
                        <span className={styles.title}>{sanfona.title}</span>
                        <button className={styles.colapse} onClick={() => toggleModal(index)}>
                            <img src={iconImage} alt="Expandir ou colapsar" />
                        </button>
                    </div>
                    {expandedItems[index] && (
                        <div className={styles.boxSanfona}>
                            <div className={styles.bodySanfona}>
                                <div className={styles.sanfonaItem}>
                                    <p>{sanfona.text}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
