import React, { Component } from "react";
import { Dropdown } from "react-dropdown-now";
import { NavLink } from "react-router-dom";

class Form extends Component {
  constructor() {
    super()
    this.state= {
      topics: [],
      difficulty: '',
      numOfQuestions: '',
      topic: ''
    }
  }

  componentDidMount = () => {
    this.setOptions(this.props.triviaType)
  }
  
  setOptions = (triviaType) => {
    const codeOptions = ['JavaScript', 'HTML', 'PHP', 'MySQL', 'WordPress']
    const generalOptions = ['Geography', 'History', 'Science & Nature', 'Science: Computers', 'Animals']
    if(triviaType === 'programing') {
      this.setState({topics: codeOptions})
    } else {
      this.setState({topics: generalOptions})
    }
  }

   convertTopicToNumber = (value) => {
    if(value.value === 'Geography') {
      this.setState({...this.state, topic: 22})
    } else if(value.value === 'History') {
      this.setState({...this.state, topic: 23})
    } else if(value.value === 'Science & Nature') {
      this.setState({...this.state, topic: 17})
    } else if(value.value === 'Science: Computers') {
      this.setState({...this.state, topic: 18})
    } else if(value.value === 'Animals'){
      this.setState({...this.state, topic: 27})
    } else {
      this.setState({...this.state, topic: value.value})
    }
  }

  convertToLowercase = (value) => {
    if(this.state.topics.includes('Geography')) {
     this.setState({...this.state, difficulty: value.value.toLowerCase()})
    } else {
      this.setState({...this.state, difficulty: value.value})
    }
  }

  getQuestions = () => {
    if(this.props.triviaType === 'programing') {
      this.props.fetchCodingData(this.state.difficulty, this.state.numOfQuestions, this.state.topic)
      .then(data => this.props.cleanCodingData(data))
      .then(data => this.props.addQuestions(data))
      .catch(error => console.log(error))
    } else {
      this.props.fetchGeneralData(this.state.numOfQuestions, this.state.topic, this.state.difficulty)
      .then(data => this.props.cleanGeneralData(data))
      .then(data => this.props.addQuestions(data))
      .catch(error => console.log(error))
    }
  }

  render() {
    return (
      <section>
        <h1 className="form-header">What Do You Know?</h1>
        <div className="topic">
          <h2 className="topic-title">Choose a Topic</h2>
          <Dropdown
            className="topic-dropdown"
            options={this.state.topics}
            onSelect={(value) => this.convertTopicToNumber(value)}
          />
        </div>
        <div className="difficulty">
          <h2 className="difficulty-title">Choose a Difficulty</h2>
          <Dropdown
            className="difficulty-dropdown"
            options={['Easy', 'Medium', 'Hard']}
            onSelect={(value) => this.convertToLowercase(value)}
          />
        </div>
        <div className="numQuestions">
          <h2 className="numQuestions-title">Number of Questions</h2>
          <Dropdown
            className="numQuestions-dropdown"
            options={[5, 10, 15]}
            onSelect={(value) => this.setState({...this.state, numOfQuestions: value.value})}
          />
        </div>
        <nav>
          <NavLink to='/'>Trivia Selection</NavLink>
          <NavLink to='/saved-questions'>View Saved Questions</NavLink>
          <NavLink to='/quiz' onClick={() => this.getQuestions()}>Start Quiz!</NavLink>
        </nav>
      </section>
    )
  }
}

export default Form