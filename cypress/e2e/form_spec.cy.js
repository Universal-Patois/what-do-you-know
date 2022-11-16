describe('form page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form')
  })

  it('should show the app name, and dropdown topics', () => {
    cy.get('.topic-title').contains('Choose a Topic')
    cy.get('.difficulty-title').contains('Choose a Difficulty')
    cy.get('.numQuestions-title').contains('Number of Questions')
  })

  it('should show navlinks at the bottom of the page', () => {
    cy.get('.trivia-selection').contains('Trivia Selection')
    cy.get('.saved-questions').contains('View Saved Questions')
    cy.get('.quiz').contains('Start Quiz')
  })

  it('should be able to click on the Trivia Selection nav link and be taken to the previous page', () => {
    cy.get('.trivia-selection').click()
    cy.get(':nth-child(2) > .button').contains('Programming')
  })
})

describe('filling form out', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(3) > .button').click()
  })

  it('should have a dropdown selection of topics based off category button that was clicked', () => {
    cy.get('.topic > [data-testid="dropdown-root"] > [data-testid="dropdown-control"] > [data-testid="dropdown-placeholder"]').click()
    cy.get('[tabindex="0"]').contains('Geography')
    cy.get('[tabindex="1"]').contains('History')
  })

  it('should be able to set the topic by clicking it', () => {
    cy.get('.topic > [data-testid="dropdown-root"] > [data-testid="dropdown-control"] > [data-testid="dropdown-placeholder"]').click()
    cy.get('[tabindex="0"]').click()
  })
  
  it('should have a dropdown selection of difficulty', () => {
    cy.get('.difficulty > [data-testid="dropdown-root"] > [data-testid="dropdown-control"]').click()
    cy.get('[tabindex="0"]').contains('Easy')
    cy.get('[tabindex="1"]').contains('Medium')
  })

  it('should be able to set difficulty by clicking it', () => {
    cy.get('.difficulty > [data-testid="dropdown-root"] > [data-testid="dropdown-control"]').click()
    cy.get('[tabindex="0"]').click()
  })

  it('should have a dropdown selection of the number of questions to choose from', () => {
    cy.get('.numQuestions > [data-testid="dropdown-root"] > [data-testid="dropdown-control"] > [data-testid="dropdown-placeholder"]').click()
    cy.get('[tabindex="0"]').contains(5)
    cy.get('[tabindex="1"]').contains(10)
  })

  it('should be able to select the number of questions desired', () => {
    cy.get('.numQuestions > [data-testid="dropdown-root"] > [data-testid="dropdown-control"] > [data-testid="dropdown-placeholder"]').click()
    cy.get('[tabindex="0"]').click()
  })

  it('should be able to go to the saved ques')
})