import React from "react";
import styles from './SectionBox.module.css'

export function SectionBox({sessao, imgTop, imgBottom}) {
    return (
        <>
            <section className={styles.SectionBox}>
                <div className={styles.baloonGray}>
                    <img src={imgTop} alt="" srcset="" />
                </div>

                <div className={styles.titleImageBox}>
                    <h1>{sessao}</h1>
                </div>

                <div className={styles.baloonPurple}>
                    <img src={imgBottom} alt="" srcset="" />
                </div>
            </section>

            
        </>
    );
}