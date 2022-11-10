import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import TriviaSelection from '../TriviaSelection/TriviaSelection';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      triviaType: ''
    }
  }

selectCategory = (event) => {
  if(event.target.name === 'programing') {
    this.setState({triviaType: 'programing'})
  } else {
    this.setState({triviaType: 'generalized'})
  }
}

  render() {
    return(
      <main>
        <Routes>
          <Route path='/' element={ <TriviaSelection  selectCategory={this.selectCategory}/> } />
          <Route path='/form' element={ <Form triviaType={this.state.triviaType} />} />
        </Routes>
      </main>
    )
  }
}

export default App;
