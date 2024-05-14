import React from 'react';
import styles from './GrayBox.module.css';
import flag from '../../../assets/IconFlag.svg';

export function GrayBox({ texto }) {
    return (
        <section className={styles.boxContainer}>
            <div className={styles.containerflag}>
                <div className={styles.lines}>
                    <div className={styles.lineWhite}></div>
                    <div className={styles.lineOrange}></div>
                </div>
                <div className={styles.boxflag}>
                    <img src={flag} alt="Flag" />
                </div>
                <h1>INTRODUÇÃO</h1>
                <div className={styles.introTxt}>
                    <p>{texto}</p>
                </div>
            </div>
        </section>
    );
}
