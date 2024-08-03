import React from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.css';
import images from '../main/boxes/Images';

function VideoPlayer({ id, videos, border }) {
    const video = videos && videos.find(video => video.id === id);

    return (
        <div className={styles.videoContainer}>
            <section className={styles.videoComponent}>
                {video ? (
                    <>
                        <img className={styles.formaLinha} src={images.formaLinha} alt="Linha" />
                        {/* <img className={styles.borda} src={border} alt="Borda" /> */}
                        <div className={styles.playerHeader}>
                            <img src={images.iconVideo} alt="Ícone de Vídeo" />
                            <div className={styles.playerTitle}>
                                <span className="accessible-text">VÍDEO / {video.title}</span>
                                <p className="accessible-text">{video.descricao}</p>
                            </div>
                        </div>
                        <div className={styles.playerContent}>
                            <div className={styles.playerVideo}>
                                <ReactPlayer
                                    url={video.url}        // URL do vídeo
                                    playing={false}        // Autoplay do vídeo
                                    controls={true}        // Mostra os controles do player
                                    volume={0.8}           // Define o volume inicial
                                    width='100%'           // Largura do player
                                    height='100%'          // Altura do player
                                />
                            </div>
                            <div className={`${styles.videoFooter} accessible-text`}>
                                <p>{video.fonte}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Erro no player de vídeo</p>
                )}
            </section>
        </div>
    );
}

export default VideoPlayer;
