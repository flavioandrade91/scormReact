import React from 'react'
import styles from '../boxes/Artigo.module.css'

export function Artigo({ id, image, texts }) {
    const text = texts && texts.find(text => text.id === id);
    

    return (
        <section className={styles.artigoContent}>
            <div className={styles.artigobox}>
                <div className={styles.artigo1}>
                    <p>O ponto de vista é identificado através de uma linha vertical que é perpendicular a linha do horizonte, e ele encontra-se exatamente na junção das duas linhas.</p>
                    <img src={image} alt="" />
                </div>
                <div className={styles.artigo2}>
                    <p>O ponto de vista é identificado através de uma linha vertical que é perpendicular a linha do horizonte, e ele encontra-se exatamente na junção das duas linhas.</p>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className={styles.artigobox}>
                <div className={styles.artigo1}>
                    <p>O ponto de vista é identificado através de uma linha vertical que é perpendicular a linha do horizonte, e ele encontra-se exatamente na junção das duas linhas.</p>
                    <img src={image} alt="" />
                </div>
                <div className={styles.artigo2}>
                    <p>O ponto de vista é identificado através de uma linha vertical que é perpendicular a linha do horizonte, e ele encontra-se exatamente na junção das duas linhas.</p>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className={styles.artigobox}>
                <div className={styles.artigo1}>
                    <p>O ponto de vista é identificado através de uma linha vertical que é perpendicular a linha do horizonte, e ele encontra-se exatamente na junção das duas linhas.</p>
                    <img src={image} alt="" />
                </div>
                <div className={styles.artigo1}>
                    <p>O ponto de vista é identificado através de uma linha vertical que é perpendicular a linha do horizonte, e ele encontra-se exatamente na junção das duas linhas.</p>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className={styles.artigobox}>
                <div className={styles.artigo1}>
                    <p>O ponto de vista é identificado através de uma linha vertical que é perpendicular a linha do horizonte, e ele encontra-se exatamente na junção das duas linhas.</p>
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    )
}

