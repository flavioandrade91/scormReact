import React from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPlayerPod.module.css';
import images from '../main/boxes/Images';
import { Video } from './Video';
import data from '../main/boxes/Dados'

export function VideoPlayerPod({ border }) {

    return (
        <header className={styles.videoComponent}>
            
                <>
                    <div className={styles.videoContainer}>
                     
                        <Video id={0} podcast={data.podcast}/>
                        
                    </div>
                    <img className={styles.formaLinha} src={images.formaLinha} alt="" />
                    <img className={styles.borda} src={border} alt="" />
                    {/* <div className={styles.playerHeader}>
                        <img src={images.iconVideo} alt="" />
                        <div className={styles.playerTitle}>
                            <span>VÍDEO / {video.title}</span>
                            <p>{video.descricao}</p>
                        </div>
                    </div> */}
                    <div className={styles.playerContent}>
                        <div className={styles.playerVideo}>
                
                            {/* <ReactPlayer
                                url={video}       // URL do vídeo
                                playing={false}        // Autoplay do vídeo
                                controls={true}        // Mostra os controles do player
                                volume={0.8}           // Define o volume inicial
                                width='86.1%'           // Largura do player
                                height='73.7%'          // Altura do player
                            /> */}
                        </div>
                        {/* <div className={styles.videoFooter}>
                            <p>{video.fonte}</p>
                        </div> */}
                    </div>
                </>
          

        </header>
    );
}

