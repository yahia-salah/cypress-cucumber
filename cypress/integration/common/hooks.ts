import { Before, After } from "cypress-cucumber-preprocessor/steps";

After(function () {
  cy.log("After each");
});
