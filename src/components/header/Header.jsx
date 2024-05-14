import React from "react";
import styles from './Header.module.css';
import images from '../main/boxes/LibraryImgs'


export function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.box01}>
                    <img className={styles.img_linha} src={images.formalinha} alt="" />
                    <img className={styles.borda_laranja} src={images.bordalaranjaCimaDir} alt="" />
                </div>
                <div className={styles.box_title}>
                    <span className={styles.title}>Fundamentos da Produção de Moda</span>
                </div>
                <div className={styles.box02}>
                    <img className={styles.borda_branca} src={images.bordabrancaesq} alt="" />
                </div>
            </header>
        </>
    );
}