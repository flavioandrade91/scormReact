import React, { Component } from 'react';
import './App.css';
import Learner from './components/Learner';
import Scorm from './scorm/Scorm';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Podcast } from './components/podcast/Podcast';
import { GrayBox, texto} from './components/main/boxes/GrayBox';
import { SectionBox } from './components/main/boxes/SectionBox';
import { Sanfona } from './components/main/sanfona/Sanfona';
import { PurpleBox } from './components/main/boxes/PurpleBox';
import {ImageBox} from './components/main/boxes/ImageBox';
import VideoPlayer from './components/multimidia/VideoPlayer';
import { Questionario } from './components/questionario/Questionario';
import { apresentacao, contexto, introducao } from './components/main/boxes/LibraryText';


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
                <Header />
                <Main />
                <Podcast />
                <GrayBox texto={introducao.texto1}/>
                <SectionBox />
                <PurpleBox />
                <ImageBox/>
                <Sanfona />                
                <VideoPlayer url="https://youtu.be/lNORW8z-ftw" />
                <Questionario/>
                <SectionBox />
            </div>
        );
    }
}

export default App;
