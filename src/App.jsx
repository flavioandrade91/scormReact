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
// import VideoPlayer from '@components/multimidia/VideoPlayer';
// import { Questionario } from '@components/questionario/Questionario';
import data from './components/main/boxes/Dados';
import images from './components/main/boxes/Images';
import { WhiteBox } from './components/main/boxes/whiteboxes/WhiteBox';

const podcast = data.podcast[0];
const introducao = data.introducao[0];
const sanfona = data.sanfona[0];

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

                <WhiteBox
                    data={data.whiteBox}
                    start={0}
                    end={3}
                />

                <ImageBox
                    imagem={images.hatsImage}
                    link="#"
                    fonte="Source of image"
                />
                {/* {data.sanfonas.map((sanfona, index) => (
                    <Sanfona
                        key={sanfona.id}
                        id={sanfona.id}
                        sanfonas={data.sanfonas}
                        iconImage={images.seta}
                    />
                ))} */}
                {/* <Sanfona
                    id={0}
                    sanfonas={data.sanfonas}
                    iconImage={images.seta}
                /> */}

                {/* 
        <VideoPlayer title="Video Title" descricao="Description" url="video_url" fonte="Source of video" />

        <SectionBox
          sessao="Another session"
          imgTop={images.baloonOrangeTop}
          imgBottom={images.baloonWhiteBottom}
        />

        <VideoPlayer title="Another Video Title" descricao="Another Description" url="another_video_url" fonte="Another Source of video" />

        <ImageBox imagem={images.indigenaFuture} link="#" fonte="Another Source of image" />

        <WhiteBox data={data.whiteBox} start={3} end={9} />

        <ImageBox imagem={images.mulheres} link="#" fonte="Yet Another Source of image" />

        <WhiteBox data={data.whiteBox} start={9} end={14} />

        <VideoPlayer title="Yet Another Video Title" descricao="Yet Another Description" url="yet_another_video_url" fonte="Yet Another Source of video" />

        <Questionario /> */}
            </div>
        );
    }
}

export default App;
