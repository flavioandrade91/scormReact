import React from "react";
import styles from "./Main.module.css";
import imagens from "../main/boxes/LibraryImgs";
import { apresentacao, contexto } from "../main/boxes/LibraryText";

export function Main() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.boxfig}>
                        <div className={styles.formalaranja}>
                            <img src={imagens.formalaranja} alt="Forma Laranja" />
                        </div>

                        <div className={styles.boxcinza}></div>

                        <div className={styles.formalinhas}>
                            <img src={imagens.formalinhas} alt="Forma Linhas" />
                        </div>

                        <div className={styles.boxicon}>
                            <img src={imagens.iconFolha} alt="Ícone Folha" />
                        </div>

                        <div className={styles.boxicon}>
                            <img src={imagens.iconFolha} alt="Ícone Folha" />
                        </div>
                    </div>
                </div>

                <img src={imagens.formaRoxo} alt="Forma Roxo" className={styles.formaroxo} />
                <div className={styles.introducao}>
                    <div className={styles.apresentacao}>
                        <h1>{apresentacao.titulo}</h1>
                        <p>{apresentacao.parag01}</p>
                        <p>{apresentacao.parag02}</p>
                        <p>{apresentacao.parag03}</p>
                    </div>

                    <div className={styles.traco}></div>

                    <div className={styles.contexto}>
                        <h1>{contexto.titulo}</h1>
                        <p>{contexto.parag01}</p>
                        <p>{contexto.parag02}</p>
                        <p>{contexto.parag03}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
