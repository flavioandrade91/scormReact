import React from "react";
import styles from './PurpleBox.module.css'

export function PurpleBox({texto}) {
    return (
        <>
           <div className={styles.boxPurple}>
                <div className={styles.introHistoria}>
                    <p>{texto}</p>
                </div>
            </div>
           
        </>
    );
}