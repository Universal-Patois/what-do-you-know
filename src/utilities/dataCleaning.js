export const cleanCodingData = (data) => {
  return data.map(question => {
    return {
      id: question.id,
      questionNumber: data.indexOf(question), 
      topic: question.tags[0].name,
      difficulty: question.difficulty,
      question: question.question,
      correctAnswer: question.correct_answer,
      choices: question.answers,
      // incorrectAnswers: getIncorrectAnswers(question.correct_answers),
    }
  })
}

export const cleanGeneralData = (data) => {
  return data.results.map(question => {
    const choices = question.incorrect_answers.push(question.correct_answer)
    return {
      id: Math.floor(Math.random() * 100),
      questionNumber: data.results.indexOf(question),
      topic: question.category,
      difficulty: question.difficulty,
      question: question.question,
      choices: question.incorrect_answers,
      correctAnswer: question.correct_answer,
    }
  })
}

// const getIncorrectAnswers = (correct_answers) => {
//   return Object.keys(correct_answers).filter(answer => {
//     return correct_answers[answer] === 'false'
//   }).map(answer => answer.slice(0, 8))
// }