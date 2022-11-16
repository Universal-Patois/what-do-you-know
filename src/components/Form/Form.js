import React, { Component } from "react";
import { Dropdown } from "react-dropdown-now";
import { NavLink } from "react-router-dom";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      codeOptions: ["JavaScript", "HTML", "PHP", "MySQL", "WordPress"],
      generalOptions: [
        "Geography",
        "History",
        "Science & Nature",
        "Science: Computers",
        "Animals",
      ],
      difficulty: "",
      numOfQuestions: "",
      topic: "",
    };
  }

  convertTopicToNumber = (topic) => {
    const lookup = {
      Geography: 22,
      History: 23,
      "Science & Nature": 17,
      "Science: Computers": 18,
      Animals: 27,
    };
    if (this.props.triviaType === "generalized") {
      this.setState({ topic: lookup[topic] });
    } else {
      this.setState({ topic: topic });
    }
  };

  getQuestions = () => {
    if (this.props.triviaType === "programming") {
      this.props
        .fetchCodingData(
          this.state.difficulty,
          this.state.numOfQuestions,
          this.state.topic
        )
        .then((data) => this.props.addQuestions(data))
        .catch((error) => console.log(error));
    } else {
      this.props
        .fetchGeneralData(
          this.state.numOfQuestions,
          this.state.topic,
          this.state.difficulty.toLowerCase()
        )
        .then((data) => this.props.addQuestions(data))
        .catch((error) => console.log(error));
    }
  };

  render() {
    return (
      <section>
        <h1 className="form-header">What Do You Know?</h1>
        <div className="topic">
          <h2 className="topic-title">Choose a Topic</h2>
          <Dropdown
            className="topic-dropdown"
            options={
              this.props.triviaType === "programming"
                ? this.state.codeOptions
                : this.state.generalOptions
            }
            onSelect={(selection) => this.convertTopicToNumber(selection.value)}
          />
        </div>
        <div className="difficulty">
          <h2 className="difficulty-title">Choose a Difficulty</h2>
          <Dropdown
            className="difficulty-dropdown"
            options={["Easy", "Medium", "Hard"]}
            onSelect={(selection) =>
              this.setState({ difficulty: selection.value })
            }
          />
        </div>
        <div className="numQuestions">
          <h2 className="numQuestions-title">Number of Questions</h2>
          <Dropdown
            className="numQuestions-dropdown"
            options={[5, 10, 15]}
            onSelect={(value) =>
              this.setState({ ...this.state, numOfQuestions: value.value })
            }
          />
        </div>
        <nav className="form-nav">
          <NavLink className="trivia-selection" to="/">
            Trivia Selection
          </NavLink>
          <NavLink className="saved-questions" to="/saved-questions">
            View Saved Questions
          </NavLink>
          <NavLink
            className="quiz"
            to="/quiz"
            onClick={() => this.getQuestions()}
          >
            Start Quiz!
          </NavLink>
        </nav>
      </section>
    );
  }
}

export default Form;
