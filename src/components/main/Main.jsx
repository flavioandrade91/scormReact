import React from "react";
import styles from "./Main.module.css";
import imagens from "../main/boxes/LibraryImgs";
import data from "./boxes/Dados";

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
                        {data.apresentacao.map((item, index) => {
                            return (
                                <>
                                <h1 className={styles.apresentacao}>{item.titulo}</h1>
                                <p key={index} >
                                    {item.parag}
                                </p>
                                </>
                            );
                        })}
                    </div>

                    <div className={styles.traco}></div>

                    <div className={styles.contexto}>
                        {data.contexto.map((item, index) => {
                            return (
                                <>
                                <h1 className={styles.contextoTitle}>{item.titulo}</h1>
                                <p key={index} >
                                    {item.parag}
                                </p>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
