import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchCodingData, fetchGeneralData } from '../../utilities/apiCalls';
import { cleanCodingData, cleanGeneralData } from '../../utilities/dataCleaning';
import TriviaSelection from '../TriviaSelection/TriviaSelection';
import Form from '../Form/Form';
import Quiz from '../Quiz/Quiz';
import Question from '../Question/Question';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      triviaType: '',
      savedQuestions: [],
      quizQuestions: [],
      currentQuestion: '',
      correctAnswers: [],
      incorrectAnswers: []
    }
  }

selectCategory = (event) => {
  if(event.target.name === 'programing') {
    this.setState({triviaType: 'programing'})
  } else {
    this.setState({triviaType: 'generalized'})
  }
}

addQuestions = (quizQuestions) => {
  this.setState({...this.state, quizQuestions: quizQuestions, currentQuestion: quizQuestions[0]})
}

showQuestion = (id) => {
  const question = this.state.quizQuestions.find(question => question.id === id)
  this.setState({...this.state, currentQuestion: question})
  console.log(this.state.currentQuestion)
}

  render() {
    return(
      <main>
        <Routes>
          <Route path='/' element={ <TriviaSelection  selectCategory={this.selectCategory}/> } />
          <Route path='/form' element={ 
          <Form 
            triviaType={this.state.triviaType} 
            fetchGeneralData={fetchGeneralData} 
            fetchCodingData={fetchCodingData}
            cleanCodingData={cleanCodingData}
            cleanGeneralData={cleanGeneralData}
            addQuestions={this.addQuestions}
          />} />
          <Route path='/quiz' element={ 
          <Quiz 
            quizQuestions={this.state.quizQuestions} 
            showQuestion={this.showQuestion}
            currentQuestion={this.state.currentQuestion}
            /> } />
          <Route path='/quiz' element={ <Question currentQuestion={this.state.currentQuestion}/> } />
        </Routes>
      </main>
    )
  }
}

export default App;