import React from "react";
import styles from './SectionBox.module.css'

export function SectionBox({ id, sessoes, imgTop, imgBottom }) {
    const sessao = sessoes.find(sessao => sessao.id === id);
    return (
        <div className={styles.SectionContainer}>
            <section className={styles.SectionBox}>
                <div className={styles.baloonGray}>
                    <img src={imgTop} alt="" />
                </div>
                <div className={`${styles.titleImageBox} accessible-text`}>
                    {sessao ? (
                        <h1 className="accessible-text">{sessao.sessao}</h1>
                    ) : (
                        <p>Erro ao carregar</p>
                    )}
                </div>
                <div className={styles.baloonPurple}>
                    <img src={imgBottom} alt="" />
                </div>
            </section>
        </div>
    );
}
