import React, { useState, useRef, useEffect } from 'react';
import music from '../../assets/audio/vozes.mp3'
import styles from '../multimidia/AudioPlayer.module.css'
import iconplay from '../../assets/iconPlay.svg'
import iconpause from '../../assets/buttonPause.png'
import iconVol from '../../assets/iconVolS.svg'


export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(iconplay);
    const [volume, setVolume] = useState(1); // Volume inicial como 100%
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    // Efeito para carregar metadados
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateDuration = () => {
                setDuration(audio.duration);
            };
            const updateCurrentTime = () => {
                setCurrentTime(audio.currentTime);
            };

            const updateProgressBar = () => {
                if (audioRef.current) {
                    setCurrentTime(audioRef.current.currentTime);
                }
            };

            audio.addEventListener('loadedmetadata', updateDuration);
            audio.addEventListener('timeupdate', updateCurrentTime);

            return () => {
                audio.removeEventListener('loadedmetadata', updateDuration);
                audio.removeEventListener('timeupdate', updateCurrentTime);
            };
        }
    }, [audioRef]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    const handleTimeChange = (event) => {
        const newTime = parseFloat(event.target.value);
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    return (
        <div className={styles.audioplayer}>

            <audio ref={audioRef} src={music} preload="auto" />

            <button className={styles.playbutton} onClick={togglePlayPause}>
                <img src={isPlaying ? iconpause : iconplay} />
            </button>

            <img src={iconVol} className={styles.iconVol} alt="" srcset="" />

            <div className={styles.progressAudio}>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>

            {/* <div> {(volume * 100).toFixed(0)}%</div> */}
            <div className={styles.Boxtimebar}>
                <span className={styles.textFormat}>{Number(currentTime).toFixed(2)}</span>

                <div className={styles.timebar}>
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleTimeChange}
                        step="1"
                    />
                </div>

                <span className={styles.textFormat}>{Number(duration).toFixed(2)}</span>
            </div>
        </div>
    );
}


