import React, { Component } from 'react';
import './App.css';
import Learner from './components/Learner';
import Scorm from './scorm/Scorm';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Podcast } from './components/podcast/Podcast';
import { GrayBox, texto } from './components/main/boxes/GrayBox';
import { SectionBox } from './components/main/boxes/SectionBox';
import { Sanfona } from './components/main/sanfona/Sanfona';
import { PurpleBox } from './components/main/boxes/PurpleBox';
import { ImageBox } from './components/main/boxes/ImageBox';
import VideoPlayer from './components/multimidia/VideoPlayer';
import { Questionario } from './components/questionario/Questionario';
import { apresentacao, contexto, introducao, title, sessoes, sanfona, fontes, videos, podcast, whiteBox } from './components/main/boxes/LibraryText';
import images from './components/main/boxes/LibraryImgs'
import { WhiteBox } from './components/main/boxes/whiteboxes/WhiteBox'


class App extends Component {

    constructor(props) {
        super(props);
        Scorm.init();
        this.state = {
            learnerName: Scorm.getLearnerName(),
            assessment: []
        }
    }

    finish() {
        Scorm.finish();
    }

    updateAssesment(correct, response) {
        this.setState({ assessment: this.state.assessment.concat([correct]) });
        Scorm.submitMCQ(correct, response);
    }


    render() {
        return (
            <div class="App">
                <Header title={title.titulo01} />
                <Main />
                <Podcast
                    title={podcast.podcast01.title}
                    curso={podcast.podcast01.curso}
                    unidadde={podcast.podcast01.unidade}
                    descricao={podcast.podcast01.modulo}
                />

                <GrayBox
                    texto={introducao.texto1}
                />

                <SectionBox
                    sessao={sessoes.sassao01}
                    imgTop={images.baloonGray}
                    imgBottom={images.baloonPurple}
                />

                <PurpleBox
                    texto={sessoes.texto}
                />

                <WhiteBox
                    data={whiteBox}
                    start={0}
                    end={3}
                />

                <ImageBox
                    imagem={images.hatsImage}
                    link={fontes.link01}
                    fonte={fontes.text01}
                />

                <Sanfona
                    title={sanfona.title}
                    text={sanfona.text}
                    iconImage={images.seta}
                />

                <VideoPlayer
                    title={videos.video01.title}
                    descricao={videos.video01.descricao}
                    url="https://youtu.be/lNORW8z-ftw"
                    fonte={videos.video01.fonte}
                />

                <SectionBox
                    sessao={sessoes.sassao02}
                    imgTop={images.baloonOrangeTop}
                    imgBottom={images.baloonWhiteBottom}
                />

                <VideoPlayer
                    title={videos.video02.title}
                    descricao={videos.video02.descricao}
                    url="https://youtu.be/lNORW8z-ftw"
                    fonte={videos.video02.fonte}
                />

                <ImageBox
                    imagem={images.indigenaFuture}
                    link={fontes.link02}
                    fonte={fontes.text02}
                />

                <WhiteBox
                    data={whiteBox}
                    start={3}
                    end={9}
                />

                <ImageBox
                    imagem={images.mulheres}
                    link={fontes.link03}
                    fonte={fontes.text03}
                />

                <WhiteBox
                    data={whiteBox}
                    start={9}
                    end={14}
                />

                <VideoPlayer
                    title={videos.video02.title}
                    descricao={videos.video02.descricao}
                    url="https://youtu.be/lNORW8z-ftw"
                    fonte={videos.video02.fonte}
                />

                <Questionario />
            </div>
        );
    }
}

export default App;
