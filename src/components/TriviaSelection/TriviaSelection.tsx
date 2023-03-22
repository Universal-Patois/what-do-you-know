import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";
import "./TriviaSelection.css";
import 'bootstrap/dist/css/bootstrap.min.css';

type TriviaSelectionProps = {
  selectCategory: (category: string) => void;
};

const TriviaSelection = ({ selectCategory }: TriviaSelectionProps) => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <center>
            <div className="start-page-container">
              <h1 className="app-header">What Do You Know?</h1>
                <Link to="/form">
                  <Button
                    variant="success"
                    className="button"
                    name="programming"
                    onClick={() => selectCategory("programming")}
                  >
                    Programming
                  </Button>{' '}
                </Link>
                <Link to="/form">
                  <Button
                    variant="success"
                    className="button"
                    name="generalized"
                    onClick={() => selectCategory("generalized")}
                  >
                    Generalized
                  </Button>{' '}
                </Link>
              <h2 className="app-message">
                Test Your Knowledge on Programming and Other Trivia Topics
              </h2>
            </div>
          </center>
        </Col>
      </Row>
    </Container>
  );
};
export default TriviaSelection;

TriviaSelection.propTypes = {
  selectCategory: PropTypes.func.isRequired,
};
