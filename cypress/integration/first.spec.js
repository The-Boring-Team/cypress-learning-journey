/// <reference types="Cypress" />

describe("My first test", () => {
    it("Should say hello to me", () => {
        console.log("hello!")
    })
    it("Should navigate to the google homepage", () => {
        cy.visit("www.google.com");
        cy.url().should("contain", "google");
        cy.title().should("equal", "Google");
    })
    it("Should verify an assertion", () => {
        let x = true;
        expect(x).to.be.equal(true);
    })
});
