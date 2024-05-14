import React from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.css'
import formaLinha from '../../assets/ArrowArtLef.svg'
import iconVideo from '../../assets/iconVideo.svg'

function VideoPlayer({ title, url, descricao, fonte }) {
    return (
        <header className={styles.videoComponent}>
            <img className={styles.formaLinha} src={formaLinha} alt="" />
            <div className={styles.playerHeader}>
                <img src={iconVideo} alt="" />
                <div className={styles.playerTitle}>
                    <span>{title}</span>
                    <p>{descricao}</p>
                </div>
            </div>
            <div className={styles.playerContent}>
            
                <div className={styles.playerVideo}>
                    <ReactPlayer
                        url={url}              // URL do vídeo
                        playing={false}         // Autoplay do vídeo
                        controls={true}        // Mostra os controles do player
                        volume={0.8}           // Define o volume inicial
                        width='100%'           // Largura do player
                        height='100%'          // Altura do player
                    />
                </div>
                
                <div className={styles.videoFooter}>
                    <p>{fonte}</p>
                </div>
            
            </div>
        </header>
    );
}

export default VideoPlayer;