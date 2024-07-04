import React from "react";
import styles from './SectionBox.module.css'

export function SectionBox({id, sessoes, imgTop, imgBottom}) {
    const sessao = sessoes.find(sessao => sessao.id === id);
    return (
        <div className={styles.SectionContainer}>
            <section className={styles.SectionBox}>
                <div className={styles.baloonGray}>
                    <img src={imgTop} alt="" srcset="" />
                </div>

                <div className={styles.titleImageBox}>
                    {sessao ? (<h1>{sessao.sessao}</h1>):
                    (<p>Sessao Fora</p>)}
                </div>

                <div className={styles.baloonPurple}>
                    <img src={imgBottom} alt="" srcset="" />
                </div>
            </section>

            
        </div>
    );
}