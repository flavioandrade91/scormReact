import React from 'react';
import styles from './GrayBox.module.css';
import flag from '../../../assets/IconFlag.svg';
import introducao from '../../main/boxes/LibraryText'

export function GrayBox({ introducao }) {
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
                    <p>{introducao.introducao}</p>
                </div>
            </div>
        </section>
    );
}
