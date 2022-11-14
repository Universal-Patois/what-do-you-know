import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TriviaSelection = ({ selectCategory }) => {
  return (
    <div className="start-page-container">
      <h1 className="app-header">What Do You Know?</h1>
      <Link to="/form">
        <button
          className="programming"
          name="programming"
          onClick={() => selectCategory('programming')}
        >
          Programming
        </button>
      </Link>
      <Link to="/form">
        <button
          className="generalized"
          name="generalized"
          onClick={() => selectCategory('generalized')}
        >
          Generalized
        </button>
      </Link>
      <h2 className="app-message">
        Test Your Knowledge on Programming and Other Trivia Topics
      </h2>
    </div>
  );
};
export default TriviaSelection;

TriviaSelection.propTypes = {
  selectCategory: PropTypes.any.isRequired,
};

// import React from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// const TriviaSelection = ({ selectCategory }) => {
//   return (
//     <div className="start-page-container">
//       <h1 className="app-header">What Do You Know?</h1>
//       <Link to="/form">
//         <button
//           className="programming"
//           onClick={() => selectCategory("programming")}
//         >
//           Programming
//         </button>
//       </Link>
//       <Link to="/form">
//         <button
//           className="generalized"
//           onClick={() => selectCategory("generalized")}
//         >
//           Generalized
//         </button>
//       </Link>
//       <h2 className="app-message">
//         Test Your Knowledge on Programming and Other Trivia Topics
//       </h2>
//     </div>
//   );
// };
// export default TriviaSelection;

// TriviaSelection.propTypes = {
//   selectCategory: PropTypes.func.isRequired,
// };
