import React, { Component } from 'react';
import './App.css'; // Supondo que você tenha um arquivo App.css
import Learner from './components/Learner';
import Scorm from './scorm/Scorm';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { GrayBox, texto } from './components/main/boxes/GrayBox';
import { SectionBox } from './components/main/boxes/SectionBox';
import { Sanfona } from './components/main/sanfona/Sanfona';
import { PurpleBox } from './components/main/boxes/PurpleBox';
import { ImageBox } from './components/main/boxes/ImageBox';
import VideoPlayer from './components/multimidia/VideoPlayer';
import { questionarios } from './components/questionario/BancoQuestoes';
import { Questionario } from './components/questionario/Questionario';
import data from './components/main/boxes/Dados';
import images from './components/main/boxes/Images';
import { WhiteBox } from './components/main/boxes/whiteboxes/WhiteBox';
import { ImagemArtigo } from './components/main/boxes/ImagemArtigo';
import { CardsBox } from './components/main/boxes/CardsBox';
import { Artigo } from './components/main/boxes/Artigo';
import Briefing from './components/main/boxes/Briefing';
import { Encerramento } from './components/main/boxes/Encerramento';
import { VideoPlayerPod } from './components/podcast/VideoPlayerPod';
import ControlPanel from './components/acessibilidade/ControlPanel';
import summary from './components/acessibilidade/Dados'; // Importar o sumário

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
        <ControlPanel />

        <Header title={data.title} />
        <Main />

        <div id="contexto"></div>
        <GrayBox textos={data.introducao} id={0} />

        <div id="historia"></div>
        <SectionBox id={0} sessoes={data.sessoes} imgTop={images.baloonGray} imgBottom={images.baloonPurple} />
        <PurpleBox textos={data.sessoes} id={0} />

        <VideoPlayer id={0} videos={data.videos} />

        <div id="projeto-imagens"></div>
        <SectionBox id={1} sessoes={data.sessoes} imgTop={images.baloonOrangeTop} imgBottom={images.baloonWhiteBottom} />
        <WhiteBox data={data.whiteBox} start={0} end={3} />
        <VideoPlayer id={1} videos={data.videos} />
        <ImageBox id={1} fontes={data.fontes} imagem={images.indigenaFuture} />
        <WhiteBox data={data.whiteBox} start={3} end={9} />
        <ImageBox id={2} fontes={data.fontes} imagem={images.mulheres} />
        <WhiteBox data={data.whiteBox} start={9} end={13} />
        <VideoPlayer id={2} videos={data.videos} />

        <div id="projeto-expo-prod"></div>
        <SectionBox id={2} sessoes={data.sessoes} imgTop={images.baloonOrangeTop} imgBottom={images.baloonPurple} />
        <PurpleBox textos={data.sessoes} id={1} />
        <VideoPlayer id={3} videos={data.videos}  />
        <WhiteBox data={data.whiteBox} start={13} end={15} />
        <ImagemArtigo id={6} imagem={images.manequeins} fontes={data.fontes} link={data.fontes.link} />
        <WhiteBox data={data.whiteBox} start={15} end={17} />

        <div id="evento-moda"></div>
        <SectionBox id={3} sessoes={data.sessoes} imgTop={images.baloonWhiteTop} imgBottom={images.baloonPurpleBottom} />
        <PurpleBox textos={data.sessoes} id={2} />
        <WhiteBox data={data.whiteBox} start={17} end={21} />
        <ImageBox id={3} fontes={data.fontes} imagem={images.desfile} />
        <Questionario questions={questionarios.questionario1} />

        <div id="infraestrutura-moda"></div>
        <SectionBox id={4} sessoes={data.sessoes} imgTop={images.baloonPurpleTop} imgBottom={images.baloonPurpleBottom} />
        <PurpleBox textos={data.sessoes} id={4} />
        <CardsBox id={0} textId={0} cards={data.cards} />
        <CardsBox id={1} textId={0} cards={data.cards} />
        <CardsBox id={2} textId={0} cards={data.cards} />

        <div id="tecnologias-moda"></div>
        <SectionBox id={5} sessoes={data.sessoes} imgTop={images.baloonWhiteTop} imgBottom={images.baloonPurpleBottom} />
        <PurpleBox textos={data.sessoes} id={5} />
        <WhiteBox data={data.whiteBox} start={21} end={25} />
        <VideoPlayerPod id={1} videos={data.podcast} />
        <Questionario questions={questionarios.questionario2} />

        <div id="graficas-projetos"></div>
        <SectionBox id={6} sessoes={data.sessoes} imgTop={images.baloonPurpleTop} imgBottom={images.baloonWhiteBottom} />
        <WhiteBox data={data.whiteBox} start={25} end={28} />
        <Sanfona sanfonas={data.sanfonas} iconImage={images.seta} start={7} end={13} />

        <div id="linguagem-visual"></div>
        <SectionBox id={7} sessoes={data.sessoes} imgTop={images.baloonWhiteTop} imgBottom={images.baloonWhiteBottom} />
        <WhiteBox data={data.whiteBox} start={28} end={33} />
        <Artigo artigos={data.artigos} />
        <WhiteBox data={data.whiteBox} start={33} end={45} />
        <ImageBox id={4} fontes={data.fontes} imagem={images.bolaBranca} />
        <WhiteBox data={data.whiteBox} start={45} end={50} />
        <Questionario questions={questionarios.questionario3} />

        <div id="briefing"></div>
        <SectionBox id={8} sessoes={data.sessoes} imgTop={images.baloonPurpleTop} imgBottom={images.baloonWhiteBottom} />
        <Briefing id={8} texts={data.sessoes} images={images.briefing} />
        <VideoPlayerPod id={2} videos={data.podcast} />

        <div id="pesquisa-moda"></div>
        <SectionBox id={9} sessoes={data.sessoes} imgTop={images.baloonOrangeTop} imgBottom={images.baloonWhiteBottom} />
        <WhiteBox data={data.whiteBox} start={50} end={54} />
        <ImageBox id={5} fontes={data.fontes} imagem={images.designPurple} />
        <Questionario questions={questionarios.questionario4} />

        <div id="fechamento-modulo"></div>
        <SectionBox id={10} sessoes={data.sessoes} imgTop={images.baloonPurpleTop} imgBottom={images.baloonGrayBottom} />
        <Encerramento id={10} sessoes={data.sessoes} FotoPerfil={images.fotoPerfil} autores={data.autor} />

      </div>
    );
  }
}

export default App;
