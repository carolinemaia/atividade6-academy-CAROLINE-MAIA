import { fakerPT_BR } from "@faker-js/faker";
import {
  Given,
  When,
  Then,
  And,
  Before,
  After,
} from "@badeball/cypress-cucumber-preprocessor";
import BuscarUsuario from "../pages/buscaUsuario.page";
import CadastroPage from "../pages/cadastroPage.page";
const cadastroPage = new CadastroPage();
const buscaUsuario = new BuscarUsuario();

var email = fakerPT_BR.internet.email();
var nome = fakerPT_BR.person.fullName();

before(() => {
  cy.intercept("POST", "api/v1/users").as("postBefore");
  cadastroPage.registrarUsuario2(nome, email);
  cy.wait("@postBefore");
});

Given("que acessei a pagina inicial do site", function () {
  cy.visit("/users");
});

When("clico no campo de busca", function () {
  cy.get(".sc-dcJsrY").click();
});

When("digito o e-mail cadastrado", function () {
  cy.intercept("GET", "api/v1/users").as("get");
  cy.get(".sc-dcJsrY").type(email);
});

When("digito o nome do usuario cadastrado", function () {
  cy.intercept("GET", "api/v1/users").as("get");
  cy.get(".sc-dcJsrY").type(nome);
});

When("consulto os detalhes do usuario", function () {
  buscaUsuario.verDetalhes();
});

When("busco por um usuario não cadastrado", function () {
  cy.get(".sc-dcJsrY").type("imposivelteressetermocadastradonosite");
});

When("digito um termo qualquer", function () {
  cy.get(".sc-dcJsrY").type("termo");
});

When("clico no botão x do campo de busca", function () {
  cy.get(".sc-dcJsrY > :nth-child(3)").click();
});

Then("consigo digitar qualquer termo", function () {
  cy.get(".sc-dcJsrY").type("abcd");
});

Then("consigo visualizar o usuário que possui esse e-mail", function () {
  cy.get('[data-test="userDataName"]').contains(nome);
  cy.get('[data-test="userDataEmail"]').should(
    "contain.text",
    "E-mail: ",
    email
  );
});

Then("visulizo todos os dados do usuário que possui esse email", function () {
  cy.get(".sc-dLMFU").should("be.visible");
});

Then("o site retorna informando que nao existe esse usuario", function () {
  cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should(
    "be.visible"
  );
});

Then(
  "informa opção de criar novo cadastro direcionando para tela de cadastro",
  function () {
    cy.contains("Cadastre um novo usuário").click();
  }
);

Then(
  "consigo visualizar os resultados de usuarios com o nome buscado",
  function () {
    cy.get('[data-test="userDataName"]').contains(nome);
  }
);

Then("o campo de busca é limpo", function () {
  cy.get(".sc-aXZVg.iYVcAu").invoke("val").should("be.empty");
});

Then("retorno para pagina inicial", function () {
  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
  cy.wait(2000);
});
