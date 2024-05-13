import React from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.css'
import formaLinha from '../../assets/ArrowArtLef.svg'
import iconVideo from '../../assets/iconVideo.svg'

function VideoPlayer({ url }) {
    return (
        <header className={styles.videoComponent}>
            <img className={styles.formaLinha} src={formaLinha} alt="" />
            <div className={styles.playerHeader}>
                <img src={iconVideo} alt="" />
                <div className={styles.playerTitle}>
                    <span>Vídeo / História da Produção de Moda</span>
                    <p>Assista ao vídeo e conheça mais sobre a História da Produção de Moda.</p>
                </div>
            </div>
            <div className={styles.playerContent}>
            
                <div className={styles.playerVideo}>
                    <ReactPlayer
                        url={url}              // URL do vídeo
                        playing={true}         // Autoplay do vídeo
                        controls={true}        // Mostra os controles do player
                        volume={0.8}           // Define o volume inicial
                        width='100%'           // Largura do player
                        height='100%'          // Altura do player
                    />
                </div>
                
                <div className={styles.videoFooter}>
                    <p>
                        Vídeo 1 - História da Produção de Moda. Fonte:
                        <a href='#'>SENAI Play (YouTube)</a>, 11/03/2024.
                    </p>
                </div>
            
            </div>
        </header>
    );
}

export default VideoPlayer;