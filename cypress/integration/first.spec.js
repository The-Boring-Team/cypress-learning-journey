describe("My first test", () => {
    it("Should say hello to me", () => {
        console.log("hello!")
    })
    it("Should navigate to the google homepage", () => {
        cy.visit("www.google.com");
    })
});
