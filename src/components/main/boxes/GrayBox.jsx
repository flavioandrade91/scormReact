import React from "react";
import styles from './GrayBox.module.css'
import flag from '../../../assets/IconFlag.svg'

export function GrayBox() {
    return (
        <>
            <section className={styles.boxContainer}>

                <div className={styles.containerflag}>

                    <div className={styles.lines}>
                        <div className={styles.lineWhite}></div>
                        <div className={styles.lineOrange}></div>
                    </div>

                    <div className={styles.boxflag}>
                        <img src={flag} alt="" />
                    </div>

                    <h1>INTRODUÇÃO</h1>

                    <div className={styles.introTxt}>
                        <p>O produtor de moda pode atuar de diversas formas,
                            no desenvolvimento de figurinos para novelas,
                            filmes ou outras produções, stylist criando toda
                            a concepção e atmosfera de apresentação de uma
                            coleção, personal stylist selecionando e combinando
                            roupas para criar looks que atendam ao estilo,
                            preferências e necessidades específicas do cliente
                            e consultor de imagem auxiliando pessoas a
                            desenvolverem uma imagem pessoal e profissional,
                            autêntica e alinhada aos seus objetivos.</p></div>
                </div>
            </section>

           
        </>
    );
}