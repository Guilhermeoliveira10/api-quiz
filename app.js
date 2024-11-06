const express = require('express');
const app = express();
const port = 3000;

// Simulando banco de dados de perguntas e respostas
const questions = [
  {
    id: 1,
    question: "Quantas vezes devemos passar o fio dental no dia?",
    options: ["a) 1", "b) 2", "c) 3", "d) 4", "e) 5 ou mais"],
    correct_answer: "e) 5 ou mais"
  },
  {
    id: 2,
    question: "Qual é a melhor hora para escovar os dentes?",
    options: ["a) De manhã", "b) Após as refeições", "c) Antes de dormir", "d) Todas as opções"],
    correct_answer: "d) Todas as opções"
  },
  {
    id: 3,
    question: "Por quanto tempo devemos escovar os dentes?",
    options: ["a) 30 segundos", "b) 1 minuto", "c) 2 minutos", "d) 5 minutos"],
    correct_answer: "c) 2 minutos"
  },
  {
    id: 4,
    question: "Qual é a principal função do fio dental?",
    options: ["a) Branquear os dentes", "b) Remover restos de alimentos", "c) Substituir a escovação", "d) Limpar a língua"],
    correct_answer: "b) Remover restos de alimentos"
  }
];

// Rota para obter as perguntas
app.get('/questions', (req, res) => {
  res.json(questions);
});

app.listen(port, () => {
  console.log(`API de perguntas rodando em http://localhost:${port}`);
});
