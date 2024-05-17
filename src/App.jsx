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
import data from './components/main/boxes/Dados';
import images from './components/main/boxes/LibraryImgs'
import { WhiteBox } from './components/main/boxes/whiteboxes/WhiteBox'

const sessoes = data.sessoes[0];
const podcast = data.podcast[0];

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
                <Header title={data.title} />
                <Main />

                <Podcast
                    title={data.podcast.title}
                    />

                    {/* 
                <GrayBox
                    texto={data.sessoes[1]}
                />

                <SectionBox
                    sessao={sessoes.sessao[0]}
                    imgTop={images.baloonGray}
                    imgBottom={images.baloonPurple}
                />

                <PurpleBox
                    texto={sessoes.sessao[1]}
                /> */}

                {/* <WhiteBox
                    data={whiteBox}
                    start={0}
                    end={3}
                />

                <ImageBox
                    imagem={images.hatsImage}
                    link={}
                    fonte={}
                />

                <Sanfona
                    title={}
                    text={}
                    iconImage={images.seta}
                />

                <VideoPlayer
                    title={}
                    descricao={}
                    url={}
                    fonte={}
                />

                <SectionBox
                    sessao={}
                    imgTop={images.baloonOrangeTop}
                    imgBottom={images.baloonWhiteBottom}
                />

                <VideoPlayer
                    title={}
                    descricao={}
                    url={}
                    fonte={}
                />

                <ImageBox
                    imagem={images.indigenaFuture}
                    link={}
                    fonte={}
                />

                <WhiteBox
                    data={whiteBox}
                    start={3}
                    end={9}
                />

                <ImageBox
                    imagem={images.mulheres}
                    link={}
                    fonte={}
                />

                <WhiteBox
                    data={whiteBox}
                    start={9}
                    end={14}
                />

                <VideoPlayer
                    title={}
                    descricao={}
                    url={}
                    fonte={}
                />


                <Questionario /> */}
            </div>
        );
    }
}

export default App;
