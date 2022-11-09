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

setCategory = (category) => {
  this.setState({triviaType: category})
}

// selectApiCall = () => {
//   if(this.state.triviaType === 'programing') {

//   }
// }

  render() {
    return(
      <main>
        <Routes>
          <Route path='/' element={ <TriviaSelection setCategory={this.setCategory} /> } />
          <Route path='/form' element={ <Form triviaType={this.state.triviaType} />} />
        </Routes>
      </main>
    )
  }
}

export default App;
