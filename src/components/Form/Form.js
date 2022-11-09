import React, { Component } from "react";
import Dropdown from "react-dropdown";

class Form extends Component {
  constructor() {
    super()
    this.state= {
      topics: [],
      difficulty: [],
      numOfQuestions: []
    }
  }

  render() {
    return (
      <section>
        <h1 className="form-header">What Do You Know?</h1>
        <div className="topic">
          <h2 className="topic-title">Choose a Topic</h2>
          <Dropdown 
            placeholder='Topics'git 
          />
        </div>
        <div className="difficulty">
          <h2 className="difficulty-title">Choose a Difficulty</h2>

        </div>
        <div className="numQuestions">
          <h2 className="numQuestions-title">Number of Questions</h2>

        </div>

      </section>
    )
  }
}

export default Form