import React from "react";
import styles from './Header.module.css';
import bordabrancaesq from '../../assets/formaBrancaBaixoEsq.png'
import formalinha from '../../assets/formaLinhasBranco.png'
import bordalaranjaCimaDir from '../../assets/formaLaranjaCimaDir.png'


export function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.box01}>
                    <img className={styles.img_linha} src={formalinha} alt="" />
                    <img className={styles.borda_laranja} src={bordalaranjaCimaDir} alt="" />
                </div>
                <div className={styles.box_title}>
                    <span className={styles.title}>Fundamentos da Produção de Moda</span>
                </div>
                <div className={styles.box02}>
                    <img className={styles.borda_branca} src={bordabrancaesq} alt="" />
                </div>
            </header>
        </>
    );
}