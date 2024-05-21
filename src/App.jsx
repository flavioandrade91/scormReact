import React, { Component } from 'react';
import './App.css'; // Supondo que você tenha um arquivo App.css
import Learner from './components/Learner';
import Scorm from './scorm/Scorm';
import { Header } from './components/header/Header';
import { Podcast } from './components/podcast/Podcast';
import { Main } from './components/main/Main';
import { GrayBox, texto } from './components/main/boxes/GrayBox';
import { SectionBox } from './components/main/boxes/SectionBox';
import { Sanfona } from './components/main/sanfona/Sanfona';
import { PurpleBox } from './components/main/boxes/PurpleBox';
import { ImageBox } from './components/main/boxes/ImageBox';
import VideoPlayer from './components/multimidia/VideoPlayer';
import { questionarios } from './components/questionario/BancoQuestoes'
import { Questionario } from './components/questionario/Questionario';
import data from './components/main/boxes/Dados';
import images from './components/main/boxes/Images';
import { WhiteBox } from './components/main/boxes/whiteboxes/WhiteBox';
import { ImagemArtigo } from './components/main/boxes/ImagemArtigo';

class App extends Component {
    constructor(props) {
        super(props);
        Scorm.init();
        this.state = {
            learnerName: Scorm.getLearnerName(),
            assessment: []
        };
    }

    finish() {
        Scorm.finish();
    }

    updateAssessment(correct, response) {
        this.setState({ assessment: this.state.assessment.concat([correct]) });
        Scorm.submitMCQ(correct, response);
    }

    render() {
        return (
            <div className="App">
                <Header
                    title={data.title}
                />

                <Main />

                <Podcast
                    podcasts={data.podcast}
                    id={0}
                />

                {/* Exemplo de uso dos componentes comentados */}

                <GrayBox
                    textos={data.introducao}
                    id={0}
                />


                <SectionBox
                    id={0}
                    sessoes={data.sessoes}
                    imgTop={images.baloonGray}
                    imgBottom={images.baloonPurple}
                />

                <PurpleBox
                    textos={data.sessoes}
                    id={0}
                />

                <ImageBox
                    id={1}
                    fontes={data.fontes}
                    imagem={images.hatsImage}
                />

                {/* Renderizar as primeiras 3 sanfonas */}
                <Sanfona
                    sanfonas={data.sanfonas}
                    iconImage={images.seta}
                    start={0}
                    end={8}
                />

                <VideoPlayer
                    id={0}
                    videos={data.videos}
                />


                <SectionBox
                    id={1}
                    sessoes={data.sessoes}
                    imgTop={images.baloonOrangeTop}
                    imgBottom={images.baloonWhiteBottom}
                />

                <WhiteBox
                    data={data.whiteBox}
                    start={0}
                    end={3}
                />

                <VideoPlayer
                    id={1}
                    videos={data.videos}
                />

                <ImageBox
                    id={1}
                    fontes={data.fontes}
                    imagem={images.indigenaFuture}
                />

                <WhiteBox
                    data={data.whiteBox}
                    start={3}
                    end={9}
                />

                <ImageBox
                    id={1}
                    fontes={data.fontes}
                    imagem={images.mulheres}
                />

                <WhiteBox
                    data={data.whiteBox}
                    start={9}
                    end={13}
                />

                <VideoPlayer
                    id={2}
                    videos={data.videos}
                />


                <SectionBox
                    id={2}
                    sessoes={data.sessoes}
                    imgTop={images.baloonOrangeTop}
                    imgBottom={images.baloonPurple}
                />

                <PurpleBox
                    textos={data.sessoes}
                    id={1}
                />

                <VideoPlayer
                    id={3}
                    videos={data.videos}
                    border={images.BorderTopPurpleLeft}
                />

                <WhiteBox
                    data={data.whiteBox}
                    start={13}
                    end={15}
                />

                <ImagemArtigo
                    imagem={images.manequeins}
                />

                <WhiteBox
                    data={data.whiteBox}
                    start={15}
                    end={17}
                />

                <SectionBox
                    id={3}
                    sessoes={data.sessoes}
                    imgTop={images.baloonWhiteTop}
                    imgBottom={images.baloonPurpleBottom}
                />

                <PurpleBox
                    textos={data.sessoes}
                    id={2}
                />

                <WhiteBox
                    data={data.whiteBox}
                    start={17}
                    end={21}
                />
                <ImageBox
                    id={1}
                    fontes={data.fontes}
                    imagem={images.desfile}
                />

                <Questionario questions={questionarios.questionario1} />

                <SectionBox
                    id={4}
                    sessoes={data.sessoes}
                    imgTop={images.baloonPurpleTop}
                    imgBottom={images.baloonPurpleBottom}
                />
                <PurpleBox
                    textos={data.sessoes}
                    id={4}
                />
                <SectionBox
                    id={5}
                    sessoes={data.sessoes}
                    imgTop={images.baloonPurpleTop}
                    imgBottom={images.baloonPurpleBottom}
                />
                <PurpleBox
                    textos={data.sessoes}
                    id={5}
                />

                <WhiteBox
                    data={data.whiteBox}
                    start={21}
                    end={25}
                />
                <Podcast
                    podcasts={data.podcast}
                    id={1}
                />
                <Questionario 
                    questions={questionarios.questionario2} 
                />
            </div>
        );
    }
}

export default App;
