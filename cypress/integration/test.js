const URL = "http://127.0.0.1:5501/index.html";
context("exchange", () => {
  before(() => {
    cy.visit(URL);
  });
  describe("Prueba el formulario", () => {
    it("asegura de que se encuentre el formulario", () => {
      cy.get("#base option").should("have.length", 33);
    });

    it("asegura el correcto envio del formulario", () => {
      cy.get(".btn").click();
      cy.get("#tabla").should("not.have.class", "oculto");
    });
  });
});
