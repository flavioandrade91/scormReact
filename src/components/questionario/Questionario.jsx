import React from 'react'
import styles from './Questinario.module.css'
import flag from '../../assets/IconFlag.svg'
import ImgO1Quest from '../../assets/Img01Quest.svg'
import ImgO2Quest from '../../assets/Img02Quest.svg'
import ImgO3Quest from '../../assets/Img03Quest.svg'

export function Questionario() {
    return (

        <section className={styles.questionarioContent}>

            <section className={styles.headerContent}>

                <div className={styles.headerTitle}>
                    <div className={styles.title}>
                        <span>exercício de fixação</span>
                    </div>
                    <div className={styles.subtitle}>
                        <span>alternativa correta</span>
                    </div>
                </div>

                <div className={styles.flagBox}>
                    <div className={styles.flag}>
                        <img src={flag} alt="" />
                    </div>
                </div>

            </section>


            <div className={styles.questionario}>

                <span className={styles.question}>
                    <p> <span>1)</span> Estudamos os tipos de projetos de produção de moda:
                       projetos de imagem, de exposição de produtos e eventos
                       de moda, cada um possuindo suas variações e aplicações.
                    </p>

                    <p>De acordo com o conteúdo estudado, associe cada uma das
                       imagens com o tipo de projeto de produção de moda correto:
                    </p>      
                </span>

                <div className={styles.boxImages}>
                    <div className={styles.images}>
                    <img src={ImgO1Quest} alt="" srcset="" />
                    <span>1</span>
                    </div>
                    <div className={styles.images}>
                    <img src={ImgO2Quest} alt="" srcset="" />
                    <span>2</span>
                    </div>
                    <div className={styles.images}>
                    <img src={ImgO3Quest} alt="" srcset="" />
                    <span>3</span>
                    </div>
                   
                </div>

                <div className={styles.quetions}>
                    
                <label htmlFor="">questão 1</label>
                <input type="radio" name="" id="" />

                <label htmlFor="">questão 1</label>
                <input type="radio" name="" id="" />

                <label htmlFor="">questão 1</label>
                <input type="radio" name="" id="" />

                <label htmlFor="">questão 1</label>
                <input type="radio" name="" id="" />

                <button type="submit">Enviar</button>
                </div>

            </div>

        </section>
    )
}



