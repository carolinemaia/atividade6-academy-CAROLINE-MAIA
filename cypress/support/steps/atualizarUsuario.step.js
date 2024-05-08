import {
  Given,
  When,
  Then,
  And,
  Before,
  After,
} from "@badeball/cypress-cucumber-preprocessor";
import { fakerPT_BR } from "@faker-js/faker";
import CadastroPage from "../pages/cadastroPage.page";
import BuscarUsuario from "../pages/buscaUsuario.page";
const cadastroPage = new CadastroPage();
const buscaUsuario = new BuscarUsuario();

var nome = fakerPT_BR.person.fullName();
var email = fakerPT_BR.internet.email().toLowerCase();
var email2 = fakerPT_BR.internet.email().toLowerCase();
var id;

before(() => {
  cy.intercept("POST", "api/v1/users").as("postBefore");
  cadastroPage.registrarUsuario2(nome, email);
  cy.wait("@postBefore").then((intercept) => {
    id = intercept.response.body.id;
  });
});

Given("que acessei a pagina inicial do site", function () {
  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
});

When("pesquiso por usuario cadastrado", function () {
  cy.get(".sc-dcJsrY").click().type(email);
});

When("consulto os detalhes do usuario", function () {
  buscaUsuario.verDetalhes();
});

When("inicio a ediçao do nome do usuario", function () {
  cy.get('[type="button"]').click();
});

When("limpo o campo de Nome", function () {
  cy.get("#userName").clear();
});

When("limpo o campo de Email", function () {
  cy.get("#userEmail").clear();
});

When("atualizo o nome do usuário com formato válido", function () {
  cy.get("#userName").clear();
  cy.get("#userName").click().type("Carol Maia");
});

When("confirmo a operaçao", function () {
  cy.get('[type="submit"]').click();
});

When("inicio a ediçao do email do usuario", function () {
  cy.get('[type="button"]').click();
});

When("atualizo o email do usuario com formato válido", function () {
  cy.get("#userEmail").clear();
  cy.get("#userEmail").click().type(email2);
});

When("atualizo o nome em formato invalido {string}", function (nome) {
  cy.get("#userName").clear();
  cy.get("#userName").click().type(nome);
});

When("atualizo o email em formato invalido {string}", function (email) {
  cy.get("#userEmail").clear();
  cy.get("#userEmail").click().type(email);
});

Then("exibe mensagem de usuario atualizado", function () {
  cy.contains("Informações atualizadas com sucesso!").should("be.visible");
});

Then("o novo nome deve ser mostrado no cadastro do usuario", function () {
  cy.contains("Carol Maia").should("be.visible");
});

Then("o novo email deve ser mostrado no cadastro do usuario", function () {
  cy.visit("/users/" + id);
  cy.get("#userEmail").should("have.value", email2);
});

Then("o site emite mensagem Formato do nome é inválido", function () {
  cy.contains("Formato do nome é inválido.").should("be.visible");
});

Then("o site emite mensagem Formato do email é inválido", function () {
  cy.contains("Formato de e-mail inválido").should("be.visible");
});

Then("o site emite mensagem informando que nome é obrigatório", function () {
  cy.contains("O campo nome é obrigatório.").should("be.visible");
});

Then("o site emite mensagem informando que email é obrigatório", function () {
  cy.contains("O campo e-mail é obrigatório.").should("be.visible");
});
