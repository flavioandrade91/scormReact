import React from "react";
import styles from './Podcast.module.css';
import images from '../main/boxes/Images';
import { AudioPlayer } from '../multimidia/AudioPlayer';

export function Podcast({ podcasts, id }) {
  // Verificar se 'podcasts' está definido antes de usar 'find'
  const podcast = podcasts && podcasts.find(podcast => podcast.id === id);

  return (
    <section className={styles.podcast}>
      <img className={styles.arrowLeft} src={images.arrowLeft} alt="Seta esquerda" />
      <img className={styles.arrowRigth} src={images.arrowRig} alt="Seta direita" />

      {podcast ? (
        <div className={styles.container}>
          <img className={styles.iconPodcast} src={images.iconPodcast} alt="Ícone do podcast" />
          <span>PODCAST / {podcast.title}</span>
          <img className={styles.logoSenaiPlay} src={images.logoSenaiPlay} alt="Logo Senai Play" />
          <p>
            Curso Técnico: <b>Técnico em Produção de Moda</b><br />
            Unidade Curricular: <b>01</b><br />
            Módulo: <b>Fundamentos da Produção de Moda</b><br />
          </p>
          <div className={styles.audioPlayer}>
            <AudioPlayer />
          </div>
        </div>
      ) : (
        <p>Erro no player</p>
      )}
    </section>
  );
}
