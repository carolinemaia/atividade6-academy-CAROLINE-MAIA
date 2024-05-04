import { fakerPT_BR } from "@faker-js/faker";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given("que acessei a página inicial", function () {
    cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
});

When("localizo o campo de busca", function () {

})

When("digito o e-mail cadastrado", function(){
    
});

Then("consigo visualizar o usuário que possui esse e-mail", function () {
    
});