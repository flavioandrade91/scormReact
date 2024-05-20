import React, { useState } from 'react';
import styles from './Sanfona.module.css';

export function Sanfona({ id, sanfonas, iconImage }) {
    const sanfona = sanfonas.find(sanfona => sanfona.id === id);
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const BoxSanfona = () => (
        <div className={styles.boxSanfona}>
            <div className={styles.bodySanfona}>
                <div className={styles.sanfonaItem}>
                    {sanfona ? <p>{sanfona.text}</p> : <p>Erro ao carregar</p>}
                </div>
            </div>
        </div>
    );

    return (
        <div className={styles.sanfonaContent}>
            <div className={styles.headerSanfona}>
                <span className={styles.title}>{sanfona ? sanfona.title : 'Título não encontrado'}</span>
                <button className={styles.colapse} onClick={toggleModal}>
                    <img src={iconImage} alt="Expandir ou colapsar" />
                </button>
            </div>
            {modal && <BoxSanfona />}
        </div>
    );
}
