import { useState } from 'react';
import { QuestionInterface, Lookup } from '../../interfaces/interfaces';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-dropdown-now';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';

type FormProps = {
  triviaType: string;
  fetchCodingData: (difficulty: string, numOfQuestions: number, topic: string) => Promise<QuestionInterface[]>;
  fetchGeneralData: (numOfQuestions: number, topic: number, difficulty: string) => Promise<QuestionInterface[]>;
  addQuestions: (quizQuestions: QuestionInterface[]) => void;
};

const Form = ({ triviaType, fetchCodingData, fetchGeneralData, addQuestions }: FormProps) => {

  const [codeOptions] = useState(['JavaScript', 'HTML', 'PHP', 'Laravel']);
  const [generalOptions] = useState(['Geography', 'History', 'Science & Nature', 'Science: Computers', 'Animals']);
  const [difficulty, setDifficulty] = useState('' as string);
  const [numOfQuestions, setNumOfQuestions] = useState(0 as number);
  const [topic, setTopic] = useState<string | number>('');

  const convertTopicToNumber = (topic: number)=> {
    const lookup: Lookup = {
      Geography: 22,
      History: 23,
      'Science & Nature': 17,
      'Science: Computers': 18,
      Animals: 27
    };
    if (triviaType === 'generalized') {
      setTopic(lookup[topic]);
    } else {
      setTopic(topic);
    }
  };

  const getQuestions = () => {
    if (triviaType === 'programming') {
      fetchCodingData(difficulty, numOfQuestions, topic)
        .then(data => addQuestions(data))
        .catch(error => console.log(error));
    } else {
      fetchGeneralData(numOfQuestions, topic, difficulty.toLowerCase())
        .then(data => addQuestions(data))
        .catch(error => console.log(error));
    }
  };

  return (
    <Container fluid={true}>
      <center>
        <h1 className="form-header">What Do You Know?</h1>
        <div className="form-selections">
          <Row>
            <Col>
              <div className="topic" style={{marginBottom: '2rem'}} >
                <h2 className="topic-title">Choose a Topic</h2>
                <Dropdown
                  className="topic-dropdown"
                  options={
                    triviaType === 'programming'
                      ? codeOptions
                      : generalOptions
                  }
                  onSelect={selection => convertTopicToNumber(selection.value)}
                />
              </div>
            </Col>
            <Col>
              <div className="difficulty" style={{marginBottom: '2rem'}}>
                <h2 className="difficulty-title">Choose a Difficulty</h2>
                <Dropdown
                  className="difficulty-dropdown"
                  options={['Easy', 'Medium', 'Hard']}
                  onSelect={selection => setDifficulty(selection.value)}
                />
              </div>
            </Col>
            <Col>
              <div className="numQuestions">
                <h2 className="numQuestions-title">Number of Questions</h2>
                <Dropdown
                  className="numQuestions-dropdown"
                  options={[5, 10, 15]}
                  onSelect={value => setNumOfQuestions(value.value)}
                />
              </div>
            </Col>
          </Row>
        </div>
        <nav className="form-nav">
          <Row >
            <Col sm={1} md={4} style={{ marginBottom: '2rem' }}>
              <NavLink className="trivia-selection" to="/">Trivia Selection</NavLink>
            </Col>
            <Col sm={1} md={4} style={{ marginBottom: '2rem' }}>
              <NavLink className="saved-questions" to="/saved-questions">View Saved Questions</NavLink>
            </Col>
            <Col sm={1} md={4}>
              <NavLink
                className="quiz"
                to="/quiz"
                onClick={() => getQuestions()}
              >Start Quiz!</NavLink>
            </Col>
          </Row>
        </nav>
      </center>
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
  getQuestions: PropTypes.func.isRequired
};
