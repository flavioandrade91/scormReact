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
                <div key={sanfona.id} className={styles.sanfonaContent}>
                    <div className={styles.headerSanfona} onClick={() => toggleModal(index)}>
                        <span className={`${styles.title} accessible-text`}>{sanfona.title}</span>
                        <button className={`${styles.colapse} ${expandedItems[index] ? styles.expanded : ''}`}>
                            <img src={iconImage} alt="Expandir ou colapsar" />
                        </button>
                    </div>
                    <div className={`${styles.boxSanfona} ${expandedItems[index] ? styles.expanded : ''}`}>
                        <div className={`${styles.bodySanfona} ${expandedItems[index] ? styles.expanded : ''}`}>
                            <div className={styles.sanfonaItem}>
                                <p className="accessible-text">{sanfona.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
