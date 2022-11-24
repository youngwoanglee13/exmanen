describe("Sumador", () => {
  it("se puede escribir texto", () => {
    cy.visit("/");
    cy.get("#mensaje").type("HOLA MUNDO");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "HOLA MUNDO");
  }); 
  it("Mostrar mensaje al poner post vacio", () => {
    cy.visit("/");
   
    cy.get("#sumar-button").click();
    cy.get("#observaciones").should("contain", "No se puede ingresar un post sin texto");
  });
});
