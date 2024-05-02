import React from "react";
import styles from './PurpleBox.module.css'
import flag from '../../../assets/IconFlag.svg'

export function PurpleBox() {
    return (
        <>
           <div className={styles.boxPurple}>
                <div className={styles.introHistoria}>
                    <p>Antes de inicarmos o estudo sobre os fundamentos da produção
                        de moda, vamos compreender um pouco sobre seu contexto histórico
                        e como essa evolução contribuiu para que ela alçancasse cada
                        vez mais espaço.
                    </p>
                </div>
            </div>
           
        </>
    );
}