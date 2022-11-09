import React, { Component } from "react";
import { Dropdown } from "react-dropdown-now";

class Form extends Component {
  constructor() {
    super()
    this.state= {
      topics: [],
      difficulty: [],
      numOfQuestions: []
    }
  }

  setOptions = (triviaType) => {
    const codeOptions = ['JavaScript', 'HTML', 'PHP', 'MySQL', 'WordPress']
    const generalOptions = ['Geography', 'History', 'Science & Nature', 'Science: Computers', 'Animals']
    if(triviaType === 'programing') {
      console.log(triviaType)
      this.setState({topics: codeOptions})
    } else {
      this.setState({topics: generalOptions})
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
            options={this.setOptions}
            // value={}
            onSelect={(value => console.log(value))}
            
          />
        </div>
        <div className="difficulty">
          <h2 className="difficulty-title">Choose a Difficulty</h2>
          <Dropdown
            className="difficulty-dropdown"
            options={['Easy', 'Medium', 'Hard']}
          />
        </div>
        <div className="numQuestions">
          <h2 className="numQuestions-title">Number of Questions</h2>
          <Dropdown
            className="numQuestions-dropdown"
            options={[5, 10, 15]}
          />
        </div>
      </section>
    )
  }
}

export default Form