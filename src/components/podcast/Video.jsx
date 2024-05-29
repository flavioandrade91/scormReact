import React from 'react'
import ReactPlayer from 'react-player';
import video from '../main/boxes/Images';

export function Video({id, podcasts}) {
    const podcast = podcasts && podcasts.find(podcast => podcast.id === id);
    return (
        <>
        <ReactPlayer
            url={video}        // URL do vídeo
            playing={false}        // Autoplay do vídeo
            controls={true}        // Mostra os controles do player
            volume={0.8}           // Define o volume inicial
            width='100%'           // Largura do player
            height='100%'          // Altura do player
        />
       </>
    );
}



