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

  render() {
    return(
      <main>
        <Routes>
          <Route path='/trivia-selection' element={ <TriviaSelection setCategory={this.setCategory} /> } />
          <Route path='/form' element={ <Form />} />
        </Routes>
      </main>
    )
  }
}

export default App;
