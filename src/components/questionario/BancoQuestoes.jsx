export const questionarios = {
    
    questionario1: [
        {
            id: 0,
            questao: `Estudamos os tipos de projetos de produção de moda: projetos de imagem, de exposição de produtos e 
                      eventos de moda, cada um possuindo suas variações e aplicações. 
                      De acordo com o conteúdo estudado, associe cada uma das imagens com o tipo de projeto de produção de moda correto: `,
            questionText: 'Escolha a alternativa que representa a correlação correta:',
            answerOptions: [
                { answerText: ' - 1: Projeto de Imagem; 2: Evento de Moda; 3: Projeto de Exposição de Produto.', isCorrect: false },
                { answerText: ' - 1: Evento de Moda; 2: Projeto de Imagem; 3: Projeto de Exposição de Produto.', isCorrect: false },
                { answerText: ' - 1: Evento de Moda; 2: Projeto de Exposição de Produto; 3: Projeto de Imagem.', isCorrect: true },
                { answerText: ' - 1: Projeto de Imagem; 2: Projeto de Exposição de Produto; 3: Evento de Moda.', isCorrect: false },
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
                { answerText: ' I, II e III.', isCorrect: true },
                { answerText: ' II e V.', isCorrect: false },
                { answerText: ' II e IV', isCorrect: false },
                { answerText: ' V e III', isCorrect: false },
            ],
           
        },
        // Mais questões podem ser adicionadas aqui
    ],
};
