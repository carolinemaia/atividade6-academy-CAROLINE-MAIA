import {Given, When,Then,And,Before,After,} from "cypress-cucumber-preprocessor/steps";
import { fakerPT_BR } from "@faker-js/faker";
import CadastroPage from "../pages/cadastroPage.page";
const cadastroPage = new CadastroPage();

var nome = fakerPT_BR.person.fullName();
var email = fakerPT_BR.internet.email();
var email2 = fakerPT_BR.internet.email();

before(() => {
cy.intercept("POST", "api/v1/users").as("postBefore");
cadastroPage.registrarUsuario2(nome, email);
cy.wait("@postBefore");
})

When("pesquiso por usuario cadastrado", function () {
  cy.get(".sc-dcJsrY").click().type(email);
  
});

When("inicio a ediçao do nome do usuario", function () {
  cy.get('[type="button"]').click();
});

When("altero o nome do usuario", function () {
  cy.get("#userName").clear();
  cy.get("#userName").click().type("Carol Maia");
  
});

When("confirmo a operaçao", function () {
  cy.get('[type="submit"]').click();
});

When("altero o email do usuario", function () {
  cy.get("#userEmail").clear();
  cy.get("#userEmail").click().type(email2);
});

Then("exibe mensagem de usuario atualizado", function () {
  cy.contains("Informações atualizadas com sucesso!").should("be.visible");
});

Then("o novo nome deve ser mostrado no cadastro do usuario", function () {
  cy.contains("Carol Maia").should("be.visible");
});

Then("o novo email deve ser mostrado no cadastro do usuario", function () {
  cy.contains(email2).should("be.visible");
});

