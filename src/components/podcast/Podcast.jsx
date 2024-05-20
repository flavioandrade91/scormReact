import React, { useState, useRef } from "react";
import styles from './Podcast.module.css'
import images from '../main/boxes/Images'
import { AudioPlayer } from '../multimidia/AudioPlayer';

export function Podcast({ podcasts, id }) {
    const podcast = podcasts.find(podcast => podcast.id === id);
    return (
        <>
            <section className={styles.podcast}>
                <img className={styles.arrowLeft} src={images.arrowLeft} alt="" />
                <img className={styles.arrowRigth} src={images.arrowRig} alt="" />
                
        {podcast ? (
                <div className={styles.container}>
                    <img className={styles.iconPodcast} src={images.iconPodcast} alt="" srcset="" />
                    <span>PODCAST / {podcast.title}</span>
                    <img className={styles.logoSenaiPlay}  src={images.logoSenaiPlay} alt="" srcset="" />
                    <p>
                    Curso Técnico: <b>Técnico em Produção de Moda</b><br/>
                    Unidade Curricular: <b>01</b><br/>
                    Módulo: <b>Fundamentos da Produção de Moda</b><br/>
                    </p>
                    <div className={styles.audioPlayer}>
                    <AudioPlayer/>
                    </div>
                </div>
                ):(<p>erro no player</p>)}                    
            </section>
        </>
    );
}