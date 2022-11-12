export const cleanCodingData = (data) => {
  return data.map(question => {
    return {
      id: question.id,
      questionNumber: data.indexOf(question), 
      topic: question.tags[0].name,
      difficulty: question.difficulty,
      question: question.question,
      correctAnswer: question.correct_answer,
      incorrectAnswers: getIncorrectAnswers(question.correct_answers),
      choices: question.answers,
    }
  })
}

export const cleanGeneralData = (data) => {
  return data.results.map(question => {
    return {
      id: Math.floor(Math.random() * 100),
      questionNumber: data.results.indexOf(question),
      topic: question.category,
      difficulty: question.difficulty,
      question: question.question,
      correctAnswer: question.correct_answer,
      incorrectAnswers: question.incorrect_answers,
    }
  })
}

const getIncorrectAnswers = (correct_answers) => {
  return Object.keys(correct_answers).filter(answer => {
    return correct_answers[answer] === 'false'
  }).map(answer => answer.slice(0, 8))
}