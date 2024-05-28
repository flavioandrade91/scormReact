import React, { useState, useRef, useEffect } from 'react';
import styles from './VideoPlayerPodcast.module.css';
import iconplay from '../../assets/iconPlay.svg';
import iconpause from '../../assets/buttonPause.png';
import iconVol from '../../assets/iconVolS.svg';

export function VideoPlayerPodcast({ podcasts }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentPodcast, setCurrentPodcast] = useState(podcasts && podcasts.length > 0 ? podcasts[0] : null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateDuration = () => {
        setDuration(video.duration);
      };
      const updateCurrentTime = () => {
        setCurrentTime(video.currentTime);
      };

      video.addEventListener('loadedmetadata', updateDuration);
      video.addEventListener('timeupdate', updateCurrentTime);

      return () => {
        video.removeEventListener('loadedmetadata', updateDuration);
        video.removeEventListener('timeupdate', updateCurrentTime);
      };
    }
  }, [currentPodcast]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video && video.readyState >= 3) {
      setIsPlaying(!isPlaying);
      if (!isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    const video = videoRef.current;
    if (video) {
      video.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleTimeChange = (event) => {
    const newTime = parseFloat(event.target.value);
    const video = videoRef.current;
    if (video) {
      video.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handlePodcastChange = (podcast) => {
    setCurrentPodcast(podcast);
    setIsPlaying(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.load();
    }
  };

  if (!currentPodcast) {
    return <div className={styles.videoplayer}>Nenhum vídeo disponível</div>;
  }

  return (
    <div className={styles.videoplayer}>
      <div className={styles.videoContainer}>
        <video ref={videoRef} src={currentPodcast.link} preload="auto" controls={false} />

        <button className={styles.playbutton} onClick={togglePlayPause}>
          <img src={isPlaying ? iconpause : iconplay} alt="Play/Pause" />
        </button>

        <img src={iconVol} className={styles.iconVol} alt="Volume Icon" />

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

      <div className={styles.podcastList}>
        {podcasts.map((podcast) => (
          <button key={podcast.id} onClick={() => handlePodcastChange(podcast)}>
            {podcast.title}
          </button>
        ))}
      </div>
    </div>
  );
}
