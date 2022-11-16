describe("saved questions page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple",
      {
        statusCode: 201,
        fixture: "generalized_fixture.json",
      }
    ).as("user");
    cy.visit("http://localhost:3000/");
    cy.get(":nth-child(3) > .button").click();
    cy.get(
      '.topic > [data-testid="dropdown-root"] > [data-testid="dropdown-control"] > [data-testid="dropdown-placeholder"]'
    ).click();
    cy.get('[tabindex="0"]').click();
    cy.get(
      '.difficulty > [data-testid="dropdown-root"] > [data-testid="dropdown-control"]'
    ).click();
    cy.get('[tabindex="0"]').click();
    cy.get(
      '.numQuestions > [data-testid="dropdown-root"] > [data-testid="dropdown-control"] > [data-testid="dropdown-placeholder"]'
    ).click();
    cy.get('[tabindex="0"]').click();
    cy.get(".quiz").click();
    cy.get(".save").click();
    cy.get(".results").click();
    cy.get(".saved").click();
  });

  it("should be able to see saved questions after the have been added", () => {
    cy.get(".number").contains("Question 1");
    cy.get(".topic").contains("Geography");
    cy.get(".question").contains(
      "What state is the largest state of the United States of America?"
    );
    cy.get("button").should("be.visible").contains("Remove Question");
  });

  it("should have the nav bar at the bottom of the page", () => {
    cy.get(".trivia").contains("Trivia Selection");
    cy.get(".form").contains("Form Page");
    cy.get(".review").contains("Review Questions");
  });

  it("should be able to click the Trivia Selection link and be take to that page", () => {
    cy.get(".trivia").click();
    cy.get(".app-message").contains(
      "Test Your Knowledge on Programming and Other Trivia Topics"
    );
  });

  it("should be able to click the Form Page link and be taken to that page", () => {
    cy.get(".form").click();
    cy.get(".topic-title").contains("Choose a Topic");
  });

  it("should be able to click the Review Questions link and be taken to the quiz with the saved questions", () => {
    cy.get(".review").click();
    cy.get(".card-button").contains("Question 1");
    cy.get(".question-number").contains("Question 1");
    cy.get(".question").contains(
      "What state is the largest state of the United States of America?"
    );
  });
});
