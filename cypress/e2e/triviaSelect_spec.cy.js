describe('trivia selection page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('should show the app name and message upon load', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.app-header').contains('What Do You Know?')
    cy.get('.app-message').contains('Test Your Knowledge on Programming and Other Trivia Topics')
  })

  it('should show two category buttons that are clickable', () => {
    cy.get(':nth-child(2) > .button').contains('Programming')
    cy.get(':nth-child(3) > .button').contains('Generalized')
  })

  it('should take the user to the form page when clicked', () => {
    cy.get(':nth-child(2) > .button').click()
    cy.get('.topic-title').contains('Choose a Topic')
  })
})