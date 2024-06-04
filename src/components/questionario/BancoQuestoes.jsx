export const questionarios = {
    
    questionario1: [
        {
            id: 0,
            questao: `Estudamos os tipos de projetos de produção de moda: projetos de imagem, de exposição de produtos e 
                      eventos de moda, cada um possuindo suas variações e aplicações. 
                      De acordo com o conteúdo estudado, associe cada uma das imagens com o tipo de projeto de produção de moda correto: `,
            questionText: 'Escolha a alternativa que representa a correlação correta:',
            answerOptions: [
                { answerText: 'A ) - 1: Projeto de Imagem; 2: Evento de Moda; 3: Projeto de Exposição de Produto.', isCorrect: false },
                { answerText: 'B ) - 1: Evento de Moda; 2: Projeto de Imagem; 3: Projeto de Exposição de Produto.', isCorrect: true },
                { answerText: 'C ) - 1: Evento de Moda; 2: Projeto de Exposição de Produto; 3: Projeto de Imagem.', isCorrect: false },
                { answerText: 'D ) - 1: Projeto de Imagem; 2: Projeto de Exposição de Produto; 3: Evento de Moda.', isCorrect: false },
            ],
            imageKeys: ['ImgO1Quest', 'ImgO2Quest', 'ImgO3Quest']
        },
        // Mais questões podem ser adicionadas aqui
    ],
    questionario2: [
        {
            id: 0,
            questao: `2) Dentro dos projetos de produção de moda a infraestrutura possui a capacidade de criar experiências envolventes e possibilidades 
            de destacar os produtos de maneira impactante. Com o uso de novas tecnologias, são capazes de melhorar a experiência dos consumidores.
            Sobre os aspectos mencionados acima analise cada uma das afirmativas a seguir:[br][br]
                        I - Na exposição de produtos, os recursos utilizados incluem manequins, bases, iluminação e adesivos, mas não há menção de fitas adesivas.[br][br]
            
                        II - A seleção correta de recursos é crucial para garantir a eficiência e qualidade nos projetos de produção de moda.[br][br]
            
                        III - A realidade aumentada não é uma tecnologia aplicada em projetos de imagem na produção de moda.[br][br]
            
                        IV - Os QR Codes interativos nas vitrines são uma forma de incorporação de tecnologia NFC.[br][br]
            
                        V - Softwares de design 3D são frequentemente utilizados para criar modelos e ambientes virtuais na produção de moda. [br][br]
                             Associe cada uma das imagens com o tipo correto de projeto de produção de moda:[br]`,

            questionText: 'Escolha a alternativa que melhor representa a correlação correta:',
            answerOptions: [
                { answerText: 'A ) I, II e III.', isCorrect: false },
                { answerText: 'B ) II e V.', isCorrect: true },
                { answerText: 'C ) II e IV', isCorrect: false },
                { answerText: 'D ) V e III', isCorrect: false },
            ],
           
        },
    ],    

    questionario3: [
        {
            id: 0,
            questao: `3) Existem vários tipos de perspectiva e cada uma com sua característica específica, associe corretamente os conceitos de perspectiva de acordo com suas descrições correspondentes.[br][br]
                        
            A) As linhas de fuga se deslocam para dois pontos.[br][br]
            
            B) O ponto de fuga fica localizado na linha do horizonte, na direção onde todas as linhas paralelas convergem.[br][br]
            
            C) Necessita de três pontos de fuga, dois na linha do horizonte e um na vertical do ponto de vista.[br][br]
            
            D) As linhas de fuga se deslocam apenas para um ponto.[br][br]`,
            
            questionText: 'Selecione a opção correta:',
            answerOptions: [
                { answerText: ' A) A: Perspectiva paralela; B: Perspectiva contra plano; C: Perspectiva aérea; D: Perspectiva oblíqua.', isCorrect: true },
                { answerText: ' B) A: Perspectiva contra plano; B: Perspectiva paralela; C: Perspectiva aérea; D: Perspectiva oblíqua.', isCorrect: false },
                { answerText: ' C) A: Perspectiva contra plano; B: Perspectiva oblíqua; C: Perspectiva aérea; D: Perspectiva paralela.', isCorrect: false },
                { answerText: ' D) A: Perspectiva paralela; B: Perspectiva oblíqua; C: Perspectiva aérea; D: Perspectiva contra plano', isCorrect: false },
            ],
           
        },
    ],    
    questionario4: [
        {
            id: 0,
            questao: `4) Qual é a principal finalidade do briefing em um projeto de produção de moda?[br][br]`,
            
            questionText: 'Selecione a opção correta:',
            answerOptions: [
                { answerText: ' A) Registro de informações durante a pesquisa aplicada.', isCorrect: false },
                { answerText: ' B) Orientar o desenvolvimento de conceitos, estilos e narrativas visuais.', isCorrect: false },
                { answerText: ' C) Definir métodos e técnicas para a realização da pesquisa.', isCorrect: false },
                { answerText: ' D) Elaborar um caderno de tendências para inspiração.', isCorrect: true },
                { answerText: ' D) Monitorar os prazos e orçamento do projeto.', isCorrect: false },
            ],
           
        },
        // Mais questões podem ser adicionadas aqui
    ],
};
