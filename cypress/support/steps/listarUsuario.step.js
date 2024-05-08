import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import ListarUsuarioPag from "../pages/listarUsuario.page";
const listarUser = new ListarUsuarioPag();

Given("que acessei a pagina inicial do site", function () {
  cy.visit("/users");
});

When("visualizo que há usuarios cadastrados", function () {
  cy.intercept("GET", "/api/v1/users", {
    statusCode: 200,
    fixture: "listaUsuario6.json",
  }).as("get");

  cy.wait("@get");
});

When("o site tem 6 usuarios cadastrados", function () {
  cy.intercept("GET", "/api/v1/users", {
    statusCode: 200,
    fixture: "listaUsuario6.json",
  }).as("get");

  cy.wait("@get");
});

When("o site tem 12 usuarios cadastrados", function () {
  cy.intercept("GET", "/api/v1/users", {
    statusCode: 200,
    fixture: "listaUsuario12.json",
  }).as("get");

  cy.wait("@get");
});

When("listo os usuarios cadastrados", function () {
  cy.intercept("GET", "/api/v1/users", {
    statusCode: 200,
    fixture: "listaUsuario6.json",
  }).as("get");
});

When("verifico que não há usuarios cadastrados", function () {
  cy.intercept("GET", "/api/v1/users", {
    statusCode: 500,
    body: [],
  }).as("list");

  cy.wait("@list");
});

Then("consigo consultar os usuarios na listagem", function () {
  cy.get("#listaUsuarios").should("be.visible");
});

Then("o site terá somente 1 página", function () {
  cy.get("#paginacaoAtual").should("have.text", "1 de 1");
});

Then("o site terá 2 páginas", function () {
  cy.get("#paginacaoAtual").should("have.text", "1 de 2");
});

Then("consigo avançar para pagina 2", function () {
  listarUser.proximaPag();
});

Then("consigo retornar para pagina 1", function () {
  listarUser.voltarPag();
});

Then("não consigo avançar a página", function () {
  cy.get(listarUser.botaoProxPag).should("be.disabled");
});

Then("não consigo voltar página", function () {
  cy.get(listarUser.botaoVoltarPag).should("be.disabled");
});

Then("consigo visualizar nome de cada usuario", function () {
  listarUser.getComponenteTodosUsuarios().each((componenteUsuario) => {
    cy.wrap(componenteUsuario).find(listarUser.nome).should("be.visible");
  });
});

Then("consigo visualizar email de cada usuario", function () {
  listarUser.getComponenteTodosUsuarios().each((componenteUsuario) => {
    cy.wrap(componenteUsuario).find(listarUser.email).should("be.visible");
  });
});

Then("consigo visualizar botão de detalhar de cada usuario", function () {
  listarUser.getComponenteTodosUsuarios().each((componenteUsuario) => {
    cy.wrap(componenteUsuario)
      .find(listarUser.botaoDetalhar)
      .should("be.visible");
  });
});

Then("consigo visualizar botão de excluir de cada usuario", function () {
  listarUser.getComponenteTodosUsuarios().each((componenteUsuario) => {
    cy.wrap(componenteUsuario)
      .find(listarUser.botaoDelete)
      .should("be.visible");
  });
});

Then("site retorna informando que não há usuários", function () {
  cy.contains("Não foi possível consultar os usuários cadastrados.").should(
    "be.visible"
  );
});
