import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchCodingData, fetchGeneralData } from "../../utilities/apiCalls";
import TriviaSelection from "../TriviaSelection/TriviaSelection";
import Form from "../Form/Form";
import Quiz from "../Quiz/Quiz";
import Question from "../Question/Question";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      triviaType: "",
      savedQuestions: [],
      correctAnswers: [],
      incorrectAnswers: [],
      quizQuestions: [],
      currentQuestion: {},
    };
  }

  selectCategory = (type) => {
    this.setState({ triviaType: type });
  };

  addQuestions = (quizQuestions) => {
    this.setState({
      ...this.state,
      quizQuestions: quizQuestions,
      currentQuestion: quizQuestions[0],
    });
  };

  showQuestion = (id) => {
    const question = this.state.quizQuestions.find(
      (question) => question.id === id
    );
    this.setState({ ...this.state, currentQuestion: question });
  };

  render() {
    return (
      <main>
        <Routes>
          <Route
            path="/"
            element={<TriviaSelection selectCategory={this.selectCategory} />}
          />
          <Route
            path="/form"
            element={
              <Form
                triviaType={this.state.triviaType}
                fetchGeneralData={fetchGeneralData}
                fetchCodingData={fetchCodingData}
                addQuestions={this.addQuestions}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                quizQuestions={this.state.quizQuestions}
                showQuestion={this.showQuestion}
                currentQuestion={this.state.currentQuestion}
                triviaType={this.state.triviaType}
                isChecked={this.isChecked}
              />
            }
          />
          <Route
            path="/quiz"
            element={<Question currentQuestion={this.state.currentQuestion} />}
          />
        </Routes>
      </main>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import { Routes, Route } from "react-router-dom";
// import TriviaSelection from "../TriviaSelection/TriviaSelection";
// import {fetchCodingData, fetchGeneralData} from "../../utilities/apiCalls"
// import Form from "../Form/Form";
// import Quiz from "../Quiz/Quiz";
// import Question from "../Question/Question";
// import "./App.css";



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       triviaType: "",
//       savedQuestions: [],
//       correctAnswers: [],
//       incorrectAnswers: [],
//       quizQuestions: [],
//       currentQuestion: {},
//     };
//   }

//   selectCategory = (type) => {
//     this.setState({ triviaType: type });
//   };

// getQuestions = ( difficulty, numOfQuestions, topic) => {
//   if (this.state.triviaType === "programming") {
//     fetchCodingData(
//         difficulty,
//         numOfQuestions,
//         topic
//       )
//       .then((data) => console.log("form", data))
//       .then((data) => this.setState({quizQuestions: data}))
//       .catch((error) => console.log(error));
//   } else {
//       fetchGeneralData(
//         numOfQuestions,
//         topic,
//         difficulty.toLowerCase()
//       )
//       .then((data) => console.log("form", data))
//       .then((data) => this.setState({quizQuestions: data}))
//       .catch((error) => console.log(error));
//   }
// };

//   render() {
//     return (
//       <main>
//         <Routes>
//           <Route
//             path="/"
//             element={<TriviaSelection selectCategory={this.selectCategory} />}
//           />
//           <Route
//             path="/form"
//             element={
//               <Form
//                 triviaType={this.state.triviaType}
//                 getQuestions={this.getQuestions}
//               />
//             }
//           />
//           <Route
//             path="/quiz"
//             element={
//               <Quiz
//                 quizQuestions={this.state.quizQuestions}
//                 currentQuestion={this.state.currentQuestion}
//                 triviaType={this.state.triviaType}
//               />   
//             }
//           />
//         </Routes>
//       </main>
//     );
//   }
// }

// export default App;
