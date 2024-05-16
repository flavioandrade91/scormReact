import React from "react";
import styles from './WhiteBox.module.css'

export function WhiteBox({ paragTitle, editorial, parag }) {
    return (
        <>
            <section className={styles.whiteBoxContent}>
                <div className={styles.whiteBox}>
                    <p className={styles.paragTitle}>{paragTitle}</p>
                    <span className={styles.title}>{editorial}</span>
                    <p className={styles.parag}>{parag}</p>
                </div>
            </section>
        </>
    );
}