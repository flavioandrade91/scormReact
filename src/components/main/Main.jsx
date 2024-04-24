import React from "react";
import styles from "./Main.module.css"
import iconFolha from "../../assets/iconFolha.png"
import formalaranja from "../../assets/formaLaranjaCimaEsq.png"
import formalinhas from "../../assets/FormaLinhasRoxo.png"
import formaRoxo from "../../assets/formaRoxoCimaDir.png"

export function Main() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>

                    <div className={styles.boxfig}>

                        <div className={styles.formalaranja} >
                            <img src={formalaranja} alt="" />
                        </div>

                        <div className={styles.boxcinza}></div>

                        <div className={styles.formalinhas}>
                            <img src={formalinhas} alt="" />
                        </div>

                        <div className={styles.boxicon}>
                            <img src={iconFolha} alt="" />
                        </div>

                        <div className={styles.boxicon}>
                            <img src={iconFolha} alt="" />
                        </div>

                    </div>
                </div>

                <img src={formaRoxo} alt="" className={styles.formaroxo} />
                <div className={styles.introducao}>

                    <div className={styles.apresentacao}>
                        <h1>Apresentação</h1>
                        <p> A moda transcende a simples função de vestimenta, tornando-se uma
                            linguagem visual, uma expressão artística e uma indústria em constante
                            transformação. Dentro desse mercado a produção de moda desempenha um
                            papel fundamental e vem conquistando cada vez mais espaço.</p>
                        <p>
                            Dentro dos projetos de exposição de produto, projetos de imagem e eventos
                            de moda, a produção de moda é responsável pela estética e a narrativa visual.
                            Contribui para contar a história da marca e auxiliar na construção de sua
                            identidade destacando as características mais importantes e relevantes.
                        </p>

                        <p>A produção de moda é responsável pela transformação de conceitos abstratos
                            em experiências visuais tangíveis.</p>
                    </div>

                    <div className={styles.traco}></div>

                    <div className={styles.contexto}>
                        <h1>contexto</h1>
                        <p>Na disciplina de Fundamentos da Produção de Moda, convidamos os
                            estudantes a embarcar em uma jornada única e enriquecedora que
                            através dos conhecimentos necessários desenvolvem as capacidades
                            básicas, que servirão de base para o desenvolvimento das
                            capacidades técnicas relacionadas as funções exercidas dentro da
                            área de Produção de Moda.
                        </p>
                        <p>No decorrer da unidade curricular, os alunos serão guiados na
                            construção de competências básicas sólidas, desde os conceitos
                            históricos e fundamentais até os mais específicos necessários
                            para a ocupação.
                        </p>

                        <p>
                            Ao final da unidade curricular, você será capaz de reconhecer e
                            identificar as diversas etapas e processos dos projetos de produção
                            de moda, suas características, aplicabilidade e novas tecnologias.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}