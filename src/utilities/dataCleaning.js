export const cleanCodingData = (data) => {
  // console.log(data)
  return data.map((question, index) => {
    return {
      id: question.id,
      questionNumber: index +1, 
      topic: question.tags[0].name,
      difficulty: question.difficulty,
      question: question.question,
      correctAnswer: question.answers[question.correct_answer],
      choices: Object.values(question.answers),
    }
  })
}

export const cleanGeneralData = (data) => {
  // console.log(data)
  return data.results.map((question, index) => {
    return {
      id: Math.floor(Math.random() * 100),
      questionNumber: index +1,
      topic: question.category,
      difficulty: question.difficulty,
      question: question.question,
      choices: [...question.incorrect_answers, question.correct_answer],
      correctAnswer: question.correct_answer,
    }
  })
}
