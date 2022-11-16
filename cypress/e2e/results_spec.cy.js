describe('results page', () => {
  beforeEach(() => {
    cy.intercept(
      'GET', 
      'https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple', 
      {
      statusCode: 201,
      fixture: "generalized_fixture.json"
    }).as('user')
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(3) > .button').click()
    cy.get('.topic > [data-testid="dropdown-root"] > [data-testid="dropdown-control"] > [data-testid="dropdown-placeholder"]').click()
    cy.get('[tabindex="0"]').click()
    cy.get('.difficulty > [data-testid="dropdown-root"] > [data-testid="dropdown-control"]').click()
    cy.get('[tabindex="0"]').click()
    cy.get('.numQuestions > [data-testid="dropdown-root"] > [data-testid="dropdown-control"] > [data-testid="dropdown-placeholder"]').click()
    cy.get('[tabindex="0"]').click()
    cy.get('.quiz').click()
    cy.get('.results').click()
  })

    it('should be able to see the results of the quiz on the page', () => {
      cy.get('.header').contains('Your Results')
      cy.get('.questions').contains('Number of Questions: 5')
      cy.get('.correct').contains('Questions Correct: 0')
      cy.get('.score').contains('Percentage: 0 %')
    })

    it('should be able to see the nav links at the bottom of the page', () => {
      cy.get('.trivia-selection').contains('Back to Trivia Selection')
      cy.get('.form').contains('Form Page')
      cy.get('.saved').contains('Saved Questions')
    })

    it('should be able to click Trivia Selection link and be taken to that page', () => {
      cy.get('.trivia-selection').click()
      cy.get('.app-message').contains('Test Your Knowledge on Programming and Other Trivia Topics')
    })

    it('should be able to click the Form page link and be taken to that page', () => {
      cy.get('.form').click()
      cy.get('.topic-title').contains('Choose a Topic')
    })

    it('should be able to click the Saved Questions button and be taken to that page', () => {
      cy.get('.saved').click()
    })

    it('should show a message when taken to the saved questions page and there are no saved questions', () => {
      cy.get('.saved').click()
      cy.get('.message').contains('There are Currently no Saved Questions! Please Take a Quiz to Find Questions You Would like to Save')
    })
})