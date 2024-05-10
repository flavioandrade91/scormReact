import React from 'react'
import styles from './Questinario.module.css'
import flag from '../../assets/IconFlag.svg'

export function Questionario() {
    return (
        <section className={styles.questionarioContent}>
            <div className={styles.headerQuestionario}>
                <div>
                    <span className={styles.title}>titulo</span>
                    <span className={styles.subtitle}>subtitle</span>
                </div>

                <img src={flag} alt="" srcset="" />

            </div>

            <div className={styles.questionario}>

                <span>testetetstdte</span>

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

        </section>
    )
}



