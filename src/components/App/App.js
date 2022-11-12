import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import TriviaSelection from '../TriviaSelection/TriviaSelection';
import Form from '../Form/Form';
import Quiz from '../Quiz/Quiz';
import './App.css';
import { fetchCodingData, fetchGeneralData } from '../../utilities/apiCalls';
import { cleanCodingData, cleanGeneralData } from '../../utilities/dataCleaning';

class App extends Component {
  constructor() {
    super()
    this.state = {
      triviaType: '',
      topic: '',
      difficulty: '',
      question: '',
      correctAnswer: '',
      incorrectAnswers: [],
      choices: '',
      savedQuestions: [],
      quizQuestions: []
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
  this.setState({...this.state, quizQuestions: quizQuestions})
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
          <Route path='/quiz' element={ <Quiz quizQuestions={this.state.quizQuestions} /> } />
        </Routes>
      </main>
    )
  }
}

export default App;