import React from "react";
import styles from './Encerramento.module.css';
import images from './Images';
import data from './Dados';
import { Autores } from "./Autores";
import { Referencias } from "./Referencias";
import { Creditos } from "./Creditos";
import { Rodape } from "./Rodape";

export function Encerramento({ id, sessoes }) {
    const sessao = sessoes.find(sessao => sessao.id === id);
    return (
        <main className={styles.enceramentoContainer}>
            <section className={styles.headerContent}>
                <div className={styles.headerTitle}>
                    <div className={styles.title}>
                        <span className="accessible-text">ENCERRAMENTO</span>
                    </div>
                    <div className={styles.subtitle}>
                        <span className="accessible-text">Tópico Final</span>
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
                    <p className="accessible-text">RECAPITULANDO</p>
                </header>
                {sessao ? (
                    <div className={styles.recapitulando}>
                        <p className="accessible-text">{sessao.texto.parag1}</p>
                        <p className="accessible-text">{sessao.texto.parag2}</p>
                        <p className="accessible-text">{sessao.texto.parag3}</p>
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
            <Referencias referencias={data.referencias} />
            <div id="referencias"></div>
            <Creditos creditos={data.creditos} />
            <div id="creditos"></div>
            <Rodape />
            <img className={styles.imagesLinhas1} src={images.FormaLinhasPurpleBlack} alt="Linhas Decorativas" />
            <img className={styles.imagesLinhas2} src={images.FormaLinhasPurpleBlack} alt="Linhas Decorativas" />
            <img className={styles.imagesLinhas3} src={images.FormaLinhasPurpleBlack} alt="Linhas Decorativas" />
            <img className={styles.imagesLinhas4} src={images.FormaLinhasPurpleBlack} alt="Linhas Decorativas" />
        </main>
    );
}
