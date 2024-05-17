import React, { useState, useRef } from "react";
import styles from './Podcast.module.css'
import iconMicrofone from '../../assets/iconMicrofone.svg'
import logoSenai from '../../assets/iconeSenaiPlay.png'
import { AudioPlayer } from "../multimidia/AudioPlayer";

export function Podcast({title}) {
    return (
        <>
            <section className={styles.podcast}>
                <div className={styles.podcastcontainer}>
                    <div className={styles.playercontainer}>

                        <div className={styles.box01}>
                            <img src={iconMicrofone} alt="" srcset="" />
                            <p className={styles.textoBox01}>{title}</p>
                        </div>

                        <div className={styles.box02}>
                            <img src={logoSenai} alt="" srcset="" />

                            <p className={styles.textoBox02}>Curso Técnico: <b>Técnico em Produção de Moda</b></p>
                            <p className={styles.textoBox02}>Unidade Curricular: <b>01</b></p>
                            <p className={styles.textoBox02}>Módulo: <b>Fundamentos da Produção de Moda</b></p>

                        </div>

                        <div className={styles.box03}>
                            <AudioPlayer />
                        </div>

                    </div>
                    <div className={styles.formasDir}></div>
                    <div className={styles.formasEsq}></div>
                </div>
            </section>
        </>
    );
}