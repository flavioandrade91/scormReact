import React from "react";
import styles from './PurpleBox.module.css'

export function PurpleBox({id, textos}) {
    const textoSessao = textos.find(texto => texto.id === id)
    return (
        <>
           <div className={styles.boxPurple}>
                <div className={styles.introHistoria}>
                 {textoSessao ? (<p>{textoSessao.texto}</p>):(<p>error</p>)}
                </div>
            </div>
           
        </>
    );
}