import React, { useState, useRef } from "react";
import styles from './Podcast.module.css'
import iconeAudio from '../../assets/iconeAudio.png'
import logoSenai from '../../assets/iconeSenaiPlay.png'
import musica from '../../assets/audio/dp.mp3'

export function Podcast() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);  // Usando ref para acessar o elemento de áudio DOM

    const playAudio = () => {
        audioRef.current.play();  // Controla o play
    };

    const pauseAudio = () => {
        audioRef.current.pause();  // Controla o pause
    };

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }
        const handleLoadedData = () => {
            if (isPlaying) {
                audioRef.current.play();
            }
        };

        return (
            <>
                <section className={styles.podcast}>
                    <div className={styles.podcastcontainer}>
                        <div className={styles.playercontainer}>

                            <div className={styles.box01}>
                                <img src={iconeAudio} alt="" srcset="" />
                                <p className={styles.textoBox01}>podcast  /  Apresentação da unidade curricular</p>
                            </div>
                            <div className={styles.box02}>
                                <img src={logoSenai} alt="" srcset="" />
                                <p className={styles.textoBox02}>
                                    <strong>Curso Técnico:</strong> Técnico em Produção de Moda<br />
                                    <strong>Unidade Curricular:</strong> 01<br />
                                    <strong>Módulo:</strong> Fundamentos da Produção de Moda</p><br />
                            </div>
                            <div className={styles.box03}>
                                <audio
                                    ref={audioRef}
                                    src="../../assets/audio/dp.mp3"
                                    onLoadedData={handleLoadedData}
                                    preload="metadata"
                                />
                            </div>

                        </div>
                        <div className={styles.formasDir}></div>
                        <div className={styles.formasEsq}></div>
                    </div>
                </section>
            </>
        );
    }