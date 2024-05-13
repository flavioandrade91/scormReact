import React, { useState } from 'react'
import styles from './Questinario.module.css'
import flag from '../../assets/IconFlag.svg'
import ImgO1Quest from '../../assets/Img01Quest.svg'
import ImgO2Quest from '../../assets/Img02Quest.svg'
import ImgO3Quest from '../../assets/Img03Quest.svg'
import OK from '../../assets/Correct.svg'
import NO from '../../assets/Wrong.svg'

export function Questionario() {
    const questions = [
        {
            questionText: 'Escolha a alternativa que representa a correlação correta:',
            answerOptions: [
                { answerText: ' - 1: Projeto de Imagem; 2: Evento de Moda; 3: Projeto de Exposição de Produto.', isCorrect: false },
                { answerText: ' - 1: Evento de Moda; 2: Projeto de Imagem; 3: Projeto de Exposição de Produto.', isCorrect: false },
                { answerText: ' - 1: Evento de Moda; 2: Projeto de Exposição de Produto; 3: Projeto de Imagem.', isCorrect: true },
                { answerText: ' - 1: Projeto de Imagem; 2: Projeto de Exposição de Produto; 3: Evento de Moda.', isCorrect: false },
            ],
        },
        // mais questões
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleRadioChange = (index) => {
        setSelectedAnswer(index);
    };

    const handleSubmit = () => {
        const isCorrect = questions[currentQuestion].answerOptions[selectedAnswer].isCorrect;
        setModalMessage(isCorrect ? 'Correto' : 'Errado');
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            const nextQuestion = currentQuestion + 1;
            if (isCorrect && nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer(null);
            } else if (nextQuestion >= questions.length) {
                setModalMessage('Você completou o quiz!');
                setShowModal(true);
                setTimeout(() => {
                    setShowModal(false);
                    setCurrentQuestion(0);
                    setSelectedAnswer(null);
                }, 2000);
            }
        }, 2000); // Modal some após 2 segundos
    };

    return (
        <section className={styles.questionarioContent}>

            <section className={styles.headerContent}>

                <div className={styles.headerTitle}>
                    <div className={styles.title}>
                        <span>exercício de fixação</span>
                    </div>
                    <div className={styles.subtitle}>
                        <span>alternativa correta</span>
                    </div>
                </div>

                <div className={styles.flagBox}>
                    <div className={styles.flag}>
                        <img src={flag} alt="" />
                    </div>
                </div>

            </section>

            <div className={styles.questionario}>

                <span className={styles.question}>
                    <p> <span>1)</span> Estudamos os tipos de projetos de produção de moda:
                        projetos de imagem, de exposição de produtos e eventos
                        de moda, cada um possuindo suas variações e aplicações.
                    </p>

                    <p>De acordo com o conteúdo estudado, associe cada uma das
                        imagens com o tipo de projeto de produção de moda correto:
                    </p>
                </span>

                <div className={styles.boxImages}>
                    <div className={styles.images}>
                        <img src={ImgO1Quest} alt="" srcset="" />
                        <span>1</span>
                    </div>
                    <div className={styles.images}>
                        <img src={ImgO2Quest} alt="" srcset="" />
                        <span>2</span>
                    </div>
                    <div className={styles.images}>
                        <img src={ImgO3Quest} alt="" srcset="" />
                        <span>3</span>
                    </div>
                </div>

                {/* inicio */}

                <div className={styles.quiz_container}>
                    <div className={styles.question_section}>
                        <div className={styles.question_count}>
                            {/* <span>Questão {currentQuestion + 1}</span>/{questions.length} */}
                        </div>
                        <div className={styles.question_text}>{questions[currentQuestion].questionText}</div>
                    </div>
                    
                    <form className={styles.answer_section} onSubmit={(e) => e.preventDefault()}>

                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                        
                        <label key={index} className={styles.radio_label}>
                                <input
                                    type="radio"
                                    name="answer"
                                    value={index}
                                    checked={selectedAnswer === index}
                                    onChange={() => handleRadioChange(index)}
                                />
                                {answerOption.answerText}
                            </label>
                        ))}
                        
                        <button onClick={handleSubmit} className={styles.submit_button} disabled={selectedAnswer === null}>
                        VERIFICAR RESPOSTA
                        </button>
                    </form>

                    {showModal && <div className={styles.modal}>{modalMessage}</div>}
                
                </div>

            </div>

        </section >
    );
}



