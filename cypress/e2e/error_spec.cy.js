describe("error handling", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(":nth-child(3) > .button").click();
  });

  it("should redirect the user if a bad url is typed", () => {
    cy.visit("http://localhost:3000/garbage");
    cy.url().should("eq", "http://localhost:3000/");
  });
});
