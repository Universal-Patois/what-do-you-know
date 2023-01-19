import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-dropdown-now";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Form.css";

const Form = ({ triviaType, fetchCodingData, fetchGeneralData, addQuestions}) => {

  const [codeOptions] = useState([ "JavaScript", "HTML", "PHP", "Laravel" ]);
  const [generalOptions] = useState([ "Geography", "History", "Science & Nature", "Science: Computers", "Animals" ]);
  const [difficulty, setDifficulty] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState("");
  const [topic, setTopic] = useState("");

  const convertTopicToNumber = (topic) => {
    const lookup = {
      Geography: 22,
      History: 23,
      "Science & Nature": 17,
      "Science: Computers": 18,
      Animals: 27,
    };
    if (triviaType === "generalized") {
      setTopic(lookup[topic]);
    } else {
      setTopic(topic);
    }
  };

  const getQuestions = () => {
    if (triviaType === "programming") {
      fetchCodingData(difficulty, numOfQuestions, topic)
        .then((data) => addQuestions(data))
        .catch((error) => console.log(error));
    } else {
      fetchGeneralData(numOfQuestions, topic, difficulty.toLowerCase())
        .then((data) => addQuestions(data))
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <section>
            <h1 className="form-header">What Do You Know?</h1>
            <div className="topic">
              <h2 className="topic-title">Choose a Topic</h2>
              <Dropdown
                className="topic-dropdown"
                options={
                  triviaType === "programming"
                    ? codeOptions
                    : generalOptions
                }
                onSelect={(selection) => convertTopicToNumber(selection.value)}
              />
            </div>
            <div className="difficulty">
              <h2 className="difficulty-title">Choose a Difficulty</h2>
              <Dropdown
                className="difficulty-dropdown"
                options={["Easy", "Medium", "Hard"]}
                onSelect={(selection) => setDifficulty(selection.value)}
              />
            </div>
            <div className="numQuestions">
              <h2 className="numQuestions-title">Number of Questions</h2>
              <Dropdown
                className="numQuestions-dropdown"
                options={[5, 10, 15]}
                onSelect={(value) => setNumOfQuestions(value.value)}
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
                onClick={() => getQuestions()}
              >
                Start Quiz!
              </NavLink>
            </nav>
          </section>
        </Col>
      </Row>
    </Container>
    );
  }

export default Form;

Form.propType = {
  codeOptions: PropTypes.arrayOf(PropTypes.string),
  generalOptions: PropTypes.arrayOf(PropTypes.string),
  difficulty: PropTypes.string,
  numOfQuestions: PropTypes.string,
  topic: PropTypes.string,
  convertTopicToNumber: PropTypes.func.isRequired,
  getQuestions: PropTypes.func.isRequired,
};
