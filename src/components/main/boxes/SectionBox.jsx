import React from "react";
import styles from './SectionBox.module.css'
import images from '../boxes/LibraryImgs'


export function SectionBox({sessao}) {
    return (
        <>
            <section className={styles.SectionBox}>
                <div className={styles.baloonGray}>
                    <img src={images.baloonGray} alt="" srcset="" />
                </div>

                <div className={styles.titleImageBox}>
                    <h1>{sessao}</h1>
                </div>

                <div className={styles.baloonPurple}>
                    <img src={images.baloonPurple} alt="" srcset="" />
                </div>
            </section>

            
        </>
    );
}