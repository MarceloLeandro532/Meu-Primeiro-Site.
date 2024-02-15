    const perguntas = [
        {
            pergunta: "O que significa o acrônimo 'DOM' em JavaScript?",
            respostas: [
                "Documento de Objeto Modelo",
                "Dinâmica de Operações Móveis",
                "Modelo de Objeto do Documento"
            ],
            correta: 2
        },
        {
            pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
            respostas: [
                "var",
                "let",
                "const"
            ],
            correta: 2
        },
        {
            pergunta: "Como você faz um comentário de uma linha em JavaScript?",
            respostas: [
                "// Comentário",
                "/* Comentário */",
                "# Comentário"
            ],
            correta: 0
        },
        {
            pergunta: "Qual método é usado para converter uma string para um número inteiro em JavaScript?",
            respostas: [
                "parseInt()",
                "parseFloat()",
                "toInteger()"
            ],
            correta: 0
        },
        {
            pergunta: "O que o operador '===' faz em comparações em JavaScript?",
            respostas: [
                "Compara valores e tipos sem coerção",
                "Compara apenas valores",
                "Compara apenas tipos de dados"
            ],
            correta: 0
        },
        {
            pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
            respostas: [
                "console.log()",
                "print()",
                "log.console()"
            ],
            correta: 0
        },
        {
            pergunta: "Qual é a estrutura de controle de fluxo utilizada para tomar decisões em JavaScript?",
            respostas: [
                "for",
                "while",
                "if-else"
            ],
            correta: 2
        },
        {
            pergunta: "Como você faz um loop 'for' em JavaScript?",
            respostas: [
                "for (i = 0; i < 5; i++)",
                "while (i < 5)",
                "loop.for (i = 0; i < 5)"
            ],
            correta: 0
        },
        {
            pergunta: "Qual método é usado para adicionar um elemento a um array em JavaScript?",
            respostas: [
                "push()",
                "append()",
                "insert()"
            ],
            correta: 0
        },
        {
            pergunta: "O que o operador '%' faz em JavaScript?",
            respostas: [
                "Divisão",
                "Módulo (resto da divisão)",
                "Multiplicação"
            ],
            correta: 1
        }
    ];

    const quiz = document.querySelector('#quiz');
    const template = document.querySelector('template');

    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrartotal = document.querySelector('#acertos span')
    mostrartotal.textContent = corretas.size + ' de ' + totalDePerguntas

    // Loop ou laço de repetição
    for (const item of perguntas) {
        const quizItem = template.content.cloneNode(true);
        quizItem.querySelector('h3').textContent = item.pergunta;

        for (let resposta of item.respostas) {
            const dt = quizItem.querySelector('dl dt').cloneNode(true);
            dt.querySelector('span').textContent = resposta;
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            if(estaCorreta) {
                corretas.add(item)
            }


            mostrartotal.textContent = corretas.size + ' de ' + totalDePerguntas
            }




            quizItem.querySelector('dl').appendChild(dt);


        }

        quizItem.querySelector('dl dt').remove();

        quiz.appendChild(quizItem);
    }