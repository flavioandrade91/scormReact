import React from "react";
import styles from "./Main.module.css";
import imagens from './boxes/Images';
import data from "./boxes/Dados";

export function Main() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.boxfig}>
                        <div className={styles.formalaranja}>
                            <img src={imagens.BorderOrangeTopLeft} alt="Forma Laranja" />
                        </div>

                        <div className={styles.boxcinza}></div>

                        <div className={styles.formalinhas}>
                            <img src={imagens.FormaLinhasPurpleBlack} alt="Forma Linhas" />
                        </div>

                        <div className={styles.boxicon}>
                            <img src={imagens.iconFolha} alt="Ícone Folha" />
                        </div>

                        <div className={styles.boxicon}>
                            <img src={imagens.iconFolha} alt="Ícone Folha" />
                        </div>
                    </div>
                </div>

                <img src={imagens.BorderPurpleBlackTopRight} alt="Forma Roxo" className={styles.formaroxo} />
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

                    <div id="contexto" className={styles.contexto}>
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
