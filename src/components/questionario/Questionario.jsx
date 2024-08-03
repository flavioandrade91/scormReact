import React, { useState } from 'react';
import styles from './Questionario.module.css';
import images from '../main/boxes/Images'; // Importar as imagens centralizadas
import data from '../main/boxes/Dados';
import questionarios from '../questionario/BancoQuestoes';

export function Questionario({ questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleRadioChange = (index) => {
        setSelectedAnswer(index);
    };

    const handleSubmit = () => {
        const isCorrect = questions[currentQuestion].answerOptions[selectedAnswer].isCorrect;
        setIsCorrectAnswer(isCorrect);
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            setShowFeedback(true);
            const nextQuestion = currentQuestion + 1;
            if (isCorrect && nextQuestion < questions.length) {
                setTimeout(() => {
                    setCurrentQuestion(nextQuestion);
                    setSelectedAnswer(null);
                    setShowFeedback(false);
                }, 2000);
            } else if (nextQuestion >= questions.length) {
                setTimeout(() => {
                    setCurrentQuestion(0);
                    setSelectedAnswer(null);
                    setShowFeedback(false);
                }, 2000);
            }
        }, 2000); // Modal some após 2 segundos
    };

    const renderImages = () => {
        const question = questions[currentQuestion];
        if (question.imageKeys && question.imageKeys.length > 0) {
            return (
                <div className={styles.boxImages}>
                    {question.imageKeys.map((key, index) => {
                        const imageKey = key.imagem;
                        const descricao = key.descricao;

                        return (
                            <div key={index} className={styles.images}>
                                <img src={images[imageKey]} alt={descricao} />
                                <span>{index + 1}</span>
                            </div>
                        );
                    })}
                </div>
            );
        }
        return null;
    };

    const replaceMarkersWithJSX = (text) => {
        return text.split('[br]').map((part, index) => (
            <React.Fragment key={index}>
                {part}
                {index < text.split('[br]').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <div className={styles.questionarioContainer}>
            <section className={styles.questionarioContent}>
                <section className={styles.headerContent}>
                    <div className={styles.headerTitle}>
                        <div className={`${styles.title} accessible-text`}>
                            <span>exercício de fixação</span>
                        </div>
                        <div className={`${styles.subtitle} accessible-text`}>
                            <span>alternativa correta</span>
                        </div>
                    </div>
                    <div className={styles.flagBox}>
                        <div className={styles.flag}>
                            <img src={images.flag} alt="Bandeira" />
                        </div>
                    </div>
                </section>
                <div className={styles.questionario}>
                    <span className={`${styles.question} accessible-text`}>
                        <p>{replaceMarkersWithJSX(`${questions[currentQuestion].questao}`)}</p>
                    </span>
                    {renderImages()}
                    <div className={styles.quiz_container}>
                        <div className={`${styles.question_section} accessible-text`}>
                            <div className={`${styles.text} accessible-text`}>{questions[currentQuestion].questionText}</div>
                        </div>
                        <form className={`${styles.answer_section} accessible-text`} onSubmit={(e) => e.preventDefault()}>
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <label
                                    key={index}
                                    className={`${styles.radio_label} ${showFeedback ? (answerOption.isCorrect ? styles.correct : (selectedAnswer === index ? styles.wrong : '')) : ''}`}
                                >
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={index}
                                        checked={selectedAnswer === index}
                                        onChange={() => handleRadioChange(index)}
                                        disabled={showFeedback}
                                    />
                                    <span>{replaceMarkersWithJSX(answerOption.answerText)}</span>
                                </label>
                            ))}
                            <button onClick={handleSubmit} className={`${styles.submit_button} accessible-text`} disabled={selectedAnswer === null}>
                                VERIFICAR RESPOSTA
                            </button>
                        </form>
                        {showModal && (
                            <div className={`${styles.modal} accessible-text`}>
                                <img src={isCorrectAnswer ? images.OK : images.NO} alt={isCorrectAnswer ? "Correto" : "Errado"} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
