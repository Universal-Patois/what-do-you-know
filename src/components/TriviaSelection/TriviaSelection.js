class TriviaSelection extends Component {
  constructor() {
    super()
    this.state = {
      triviaType: ''
    }
  }

  selectTriviaCategory = (event) => {
    if(event.target.name === 'programing') {
      this.setState({triviaType: 'programing'}) 
    } else if(event.target.name === 'generalized') {
      this.setState({triviaType: 'generalized'})
    }
    const category = this.state.triviaType
    this.props.setCategory(category)
  }

  render() {
    return (
      <div className="start-page-container">
        <h1 className="app-header">What Do You Know?</h1>
        <button 
        className='programming'
        name='programing'
        onClick={event => this.selectTriviaCategory(event)}>Programing
        </button>
        <button 
        className="generalized"
        name="generalized"
        onClick={event => this.selectTriviaCategory(event)}>Generalized
        </button>
        <h2 className="app-message">Test Your Knowledge on Programming and Other Trivia Topics</h2>
      </div>
    )
  }
}
export default TriviaSelection;