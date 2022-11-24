describe("Sumador", () => {
  it("se puede escribir texto", () => {
    cy.visit("/");
    cy.get("#mensaje").type("HOLA MUNDO");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "HOLA MUNDO");
  });
});
