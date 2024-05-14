import React, { useEffect, useState } from 'react';
import styles from './Sanfona.module.css';

export function Sanfona({title, text, iconImage}) {

    const [modal, setModal] = useState(false);
    const [icon, setIcon] = useState({iconImage});

    const toggleModal = () => {
        setModal(!modal);
        setIcon(!icon);
    };

    const BoxSanfona = () => (
        <div className={styles.boxSanfona}>
            <div className={styles.bodySanfona}>
                <div className={styles.sanfonaItem}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className={styles.sanfonaContent}>
                <div className={styles.headerSanfona}>
                    <span className={styles.title}>{title}</span>
                    <button className={styles.colapse} onClick={toggleModal}>
                        <img src={iconImage} alt="Expandir ou colapsar" />
                    </button>
                </div>
                {modal && <BoxSanfona />}
            </div>
        </>
    );
}
