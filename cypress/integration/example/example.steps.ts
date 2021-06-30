import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the-internet homepage", () => {
  cy.visit("/");
});

When("I navigate to {string}", (pageName: string) => {
  cy.get("ul li a")
    .as("pages")
    .each(($el, index, $list) => {
      if ($list[index].innerText.includes(pageName)) {
        cy.get("@pages").eq(index).click();
        return false;
      }
    });
});

Then("{string} page opens", (pageName: string) => {
  cy.get("#content h3").should("contain.text", pageName);
});

When("I click Add Element", () => {
  cy.get("button").contains("Add Element").click();
});

Then("There is {int} Delete button", (numberOfElements) => {
  if (numberOfElements > 0)
    cy.xpath("//button[contains(text(),'Delete')]").should(
      "have.length",
      numberOfElements
    );
  else cy.xpath("//button[contains(text(),'Delete')]").should("not.exist");
});

When("I click first Delete button", () => {
  cy.xpath("//button[contains(text(),'Delete')]").eq(0).click();
});
