import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPlayerPod.module.css';
import images from '../main/boxes/Images';

export function VideoPlayerPod({ id, videos }) {
    const video = videos && videos.find(video => video.id === id);
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [played, setPlayed] = useState(0);
    const [showControls, setShowControls] = useState(false);

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    const handleProgress = (state) => {
        setPlayed(state.played);
    };

    const handleSeekChange = (e) => {
        setPlayed(parseFloat(e.target.value));
        playerRef.current.seekTo(parseFloat(e.target.value));
    };

    const handleMouseEnter = () => {
        setShowControls(true);
    };

    const handleMouseLeave = () => {
        setShowControls(false);
    };

    return (
        <>
            {video ? (
                <section className={styles.videoContainer}>
                    <div className={styles.playerHeader}>
                    </div>
                    <div
                        className={styles.videoBox}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handlePlayPause}
                    >
                        <div className={styles.playerWrapper}>
                            <ReactPlayer
                                ref={playerRef}
                                className={styles.video}
                                url={video.url}
                                playing={playing}
                                controls={true}
                                volume={volume}
                                onProgress={handleProgress}
                                width="100%"
                                height="100%"
                                config={{
                                    youtube: {
                                        playerVars: { showinfo: 0, controls: 1 }
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <img className={styles.formaLinha1} src={images.formaLinha} alt="Linha Esquerda"/>
                    <img className={styles.formaLinha2} src={images.formaLinha} alt="Linha Direita"/>
                </section>
            ) : (
                <p>Erro no player de vídeo</p>
            )}
        </>
    );
}
