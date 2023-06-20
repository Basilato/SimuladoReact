const segment = {
  basic: 'basic',
  medium: 'medium',
  advanced: 'advanced',
};

const quiz = {
  quizTitle: 'CFC',
  questions: [
    {
      question: 'Um condutor que vai transportar seu filho de 9 anos e que tem a altura de 1,45m deve ser transportado:',
      questionType: 'text',
      answers: [
        'No banco traseiro, obrigatoriamente, e usando dispositivo de retenção adequado para cada idade, peso e altura',
        'No banco dianteiro ou traseiro usando dispositivo de retenção adequado para cada idade, peso e altura',
        'No banco traseiro com cadeirinha.',
        'No banco dianteiro ou traseiro desde que com uso de cadeirinha,.',
      ],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correto',
      messageForIncorrectAnswer: 'Errado',
      explanation: 'Código de trânsito brasileiro\nArt. 64. As crianças com idade inferior a 10 (dez) anos que não tenham atingido 1,45 m (um metro e quarenta e cinco centímetros) de altura devem ser transportadas nos bancos traseiros, em dispositivo de retenção adequado para cada idade, peso e altura, salvo exceções relacionadas a tipos específicos de veículos regulamentadas pelo Contran.',
      point: '1',
    },
    {
      question: 'QUESTAO 2 TESTE',
      questionType: 'text',
      answers: [
        'No banco traseiro, obrigatoriamente, e usando dispositivo de retenção adequado para cada idade, peso e altura',
        'No banco dianteiro ou traseiro desde que com uso de cadeirinha,.',
        'No banco traseiro com cadeirinha.',
        'No banco dianteiro ou traseiro usando dispositivo de retenção adequado para cada idade, peso e altura',
      ],
      correctAnswer: '4',
      messageForCorrectAnswer: 'Art. 64. As crianças com idade inferior a 10 (dez) anos que não tenham atingido 1,45 m (um metro e quarenta e cinco centímetros) de altura devem ser transportadas nos bancos traseiros, em dispositivo de retenção adequado para cada idade, peso e altura, salvo exceções relacionadas a tipos específicos de veículos regulamentadas pelo Contran.',
      messageForIncorrectAnswer: 'Art. 64. As crianças com idade inferior a 10 (dez) anos que não tenham atingido 1,45 m (um metro e quarenta e cinco centímetros) de altura devem ser transportadas nos bancos traseiros, em dispositivo de retenção adequado para cada idade, peso e altura, salvo exceções relacionadas a tipos específicos de veículos regulamentadas pelo Contran.',
      explanation: 'Art. 64. As crianças com idade inferior a 10 (dez) anos que não tenham atingido 1,45 m (um metro e quarenta e cinco centímetros) de altura devem ser transportadas nos bancos traseiros, em dispositivo de retenção adequado para cada idade, peso e altura, salvo exceções relacionadas a tipos específicos de veículos regulamentadas pelo Contran.',
      point: '1',
    },
  ],
};

export default quiz;
