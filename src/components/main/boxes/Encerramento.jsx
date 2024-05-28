import React from "react";
import styles from './Encerramento.module.css'
import images from './Images'
import data from './Dados'
import { Autores } from "./Autores";
import { Referencias } from "./Referencias";
import { Creditos } from "./Creditos";
import { Rodape } from "./Rodape";

export function Encerramento({ id, sessoes}) {
    const sessao = sessoes.find(sessao => sessao.id === id);
    return (
        <main className={styles.enceramentoContainer}>
            <section className={styles.headerContent}>
                <div className={styles.headerTitle}>
                    <div className={styles.title}>
                        <span>ENCERRAMENTO</span>
                    </div>
                    <div className={styles.subtitle}>
                        <span>Tópico Final</span>
                    </div>
                </div>
                <div className={styles.flagBox}>
                    <div className={styles.flag}>
                        <img src={images.flag} alt="Bandeira" />
                    </div>
                </div>
            </section>
            <section className={styles.recapitulandoContent}>
                <header className={styles.header}>
                    <img src={images.livro} alt="Livro" />
                    <p>RECAPITULANDO</p>

                </header>
                {sessao ? (
                    <div className={styles.recapitulando}>
                        <p>{sessao.texto.prag1}</p>
                        <p>{sessao.texto.prag2}</p>
                        <p>{sessao.texto.prag3}</p>
                    </div>
                ) : (
                    <p>Erro ao carregar</p>
                )}
              
            </section>

            <Autores
                    id={0}
                    autores={data.autor}
                    FotoPerfil={images.fotoPerfil}
                />

            <Referencias referencias={data.referencias}/> 
            <Creditos creditos={data.creditos}  />    
            <Rodape />
            <img className={styles.imagesLinhas1} src={images.FormaLinhasPurpleBlack} alt="Linhas Decorativas" />
            <img className={styles.imagesLinhas2} src={images.FormaLinhasPurpleBlack} alt="Linhas Decorativas" />
            <img className={styles.imagesLinhas3} src={images.FormaLinhasPurpleBlack} alt="Linhas Decorativas" />
            <img className={styles.imagesLinhas4} src={images.FormaLinhasPurpleBlack} alt="Linhas Decorativas" />
        </main>
    );
}
