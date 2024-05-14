import React, { useState, useRef } from "react";
import styles from './Podcast.module.css'
import iconMicrofone from '../../assets/iconMicrofone.svg'
import logoSenai from '../../assets/iconeSenaiPlay.png'
import {AudioPlayer} from "../multimidia/AudioPlayer";

export function Podcast({title, descricao}) {
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
                                <p className={styles.textoBox02}>{descricao}</p></div>
                            
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