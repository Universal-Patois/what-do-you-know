describe('quiz page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(3) > .button').click()
    cy.get('.topic > [data-testid="dropdown-root"] > [data-testid="dropdown-control"] > [data-testid="dropdown-placeholder"]').click()
    cy.get('[tabindex="0"]').click()
    cy.get('.difficulty > [data-testid="dropdown-root"] > [data-testid="dropdown-control"]').click()
    cy.get('[tabindex="0"]').click()
    cy.get('.numQuestions > [data-testid="dropdown-root"] > [data-testid="dropdown-control"] > [data-testid="dropdown-placeholder"]').click()
    cy.get('[tabindex="0"]').click()
    cy.get('.quiz').click()
    cy.intercept(
      'GET', 
      'https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple', 
      {
      statusCode: 201,
      fixture: "generalized_fixture.json"
    }).as('user')
  })

  it('should show the number of quiz questions that were selected', () => {
    cy.get(':nth-child(1) > .card-button').should('be.visible').contains('Question 1')
    cy.get(':nth-child(2) > .card-button').should('be.visible').contains('Question 2')
    cy.get(':nth-child(3) > .card-button').should('be.visible').contains('Question 3')
    cy.get(':nth-child(4) > .card-button').should('be.visible').contains('Question 4')
    cy.get(':nth-child(5) > .card-button').should('be.visible').contains('Question 5')
  })

  it('should show the question number, question, choice container with buttons, and message', () => {
    cy.get('.question-number').contains('Question 1')
    cy.get('.question').should('be.visible')
    cy.get('.choice-container').should('be.visible')
    cy.get('.message').contains('The Last Answer that is Clicked will be Saved')
  })

  it('should show the nav links at the bottom of the page', () => {
    cy.get('.trivia-selection').contains('Back to Trivia Selection')
    cy.get('.form').contains('Form Page')
    cy.get('.save').contains('Save Question')
    cy.get('.results').contains('See Results')
  })

  it('should be able to click the Back to Trivia Selection link and return to that page', () => {
    cy.get('.trivia-selection').click()
    cy.get('.app-message').contains('Test Your Knowledge on Programming and Other Trivia Topics')
  })

  it('should be able to click the Form Page link and return to that page', () => {
    cy.get('.form').click()
    cy.get('.topic-title').contains('Choose a Topic')
  })

  it('should be able to click the Save Question link', () => {
    cy.get('.save').click()
  })

  it('should be able to click the See Results link and be taken to the results', () => {
    cy.get('.results').click()
    cy.get('.header').contains('Your Results')
  })
})