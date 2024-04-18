import React from "react";
import styles from "./Main.module.css"
import iconFolha from "../../assets/iconFolha.png"
import formalaranja from "../../assets/formaLaranjaCimaEsq.png"
import formalinhas from "../../assets/FormaLinhasRoxo.png"
import formaRoxo from "../../assets/formaRoxoCimaDir.png"

export function Main() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>

                    <div className={styles.formalaranja} >
                        <img src={formalaranja} alt="" />
                    </div>

                    <div className={styles.boxcinza}></div>

                    <img src={formaRoxo} alt="" className={styles.formaroxo} />
                    
                    <div className={styles.formalinhas}>
                        <img src={formalinhas} alt="" />
                    </div>
                    
                    <div className={styles.boxicon}>
                        <img src={iconFolha} alt="" />
                    </div>
                    
                </div>
            </div>

        </>
    );
}