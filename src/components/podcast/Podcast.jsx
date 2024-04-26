import React, { useState, useRef } from "react";
import styles from './Podcast.module.css'
import iconMicrofone from '../../assets/iconMicrofone.svg'
import logoSenai from '../../assets/iconeSenaiPlay.png'
import {AudioPlayer} from "../multimidia/AudioPlayer";

export function Podcast() {
        return (
            <>
                <section className={styles.podcast}>
                    <div className={styles.podcastcontainer}>
                        <div className={styles.playercontainer}>

                            <div className={styles.box01}>
                                <img src={iconMicrofone} alt="" srcset="" />
                                <p className={styles.textoBox01}>podcast  /  Apresentação da unidade curricular</p>
                            </div>
                            <div className={styles.box02}>
                                <img src={logoSenai} alt="" srcset="" />
                                <p className={styles.textoBox02}>
                                    Curso Técnico: <strong>Técnico em Produção de Moda</strong><br />
                                    Unidade Curricular: <strong>01</strong><br />
                                    Módulo: <strong>Fundamentos da Produção de Moda</strong></p><br />
                            </div>
                            
                            <div className={styles.box03}>
                                <AudioPlayer/>
                            </div>

                        </div>
                        <div className={styles.formasDir}></div>
                        <div className={styles.formasEsq}></div>
                    </div>
                </section>
            </>
        );
    }