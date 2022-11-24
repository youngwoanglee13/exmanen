describe("Sumador", () => {
  it("se puede escribir texto", () => {
    cy.visit("/");
    cy.get("#mensaje").type("HOLA MUNDO");

    cy.get("#mensaje").should("contain", "HOLA MUNDO");
  });
});
