import { fakerPT_BR } from "@faker-js/faker";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CadastroPage from "../pages/cadastroPage.page";
const cadastroPage = new CadastroPage();

var email = fakerPT_BR.internet.email();
var nome = fakerPT_BR.person.fullName();

Given("que acessei a pagina inicial do site", function () {
  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
});

When("clicar em Novo", function () {
  cadastroPage.clickNovo();
});

When("informar um nome valido", function () {
  cadastroPage.typeNome(nome);
});

When("informar um email valido", function () {
  cadastroPage.typeEmail(email);
});

When("confirmar operação", function () {
  cy.intercept("POST", "api/v1/users").as("postUsuario");
  cadastroPage.clickSalvar();
});

When("informar um email ja cadastrado por outro usuário", function () {
  cadastroPage.typeEmail("caroldasilva@ja.existe");
  //cy.wait("@post");
});

When("informar um nome com formato invalido {string}", function (nome) {
  cadastroPage.typeNome(nome);
});

When("informar um email com formato invalido {string}", function (email) {
  cadastroPage.typeEmail(email);
});

When("informar um nome com mais de 100 caracteres", function () {
  var nomeCaractere = "";
  for (let i = 0; i < 101; i++) {
    nomeCaractere += "a";
  }
  cy.get("#name").type(nomeCaractere);
});

When("informar um email com mais de 60 caracteres", function () {
  var emailCaractere = "";
  for (let i = 0; i < 61; i++) {
    emailCaractere += "k";
  }
  cy.get("#email").type(emailCaractere + "@raro.com");
});

When("informar um nome com menos de 4 letras", function (tabela) {
  const dadoNome = tabela.rowsHash();
  cadastroPage.typeNome(dadoNome.nome);
});

When("informar um email com menos de 4 caracteres", function (tabela) {
  const dadoEmail = tabela.rowsHash();
  cadastroPage.typeEmail(dadoEmail.email);
});

Then("os campos nome e email serão limpos", function () {
  cadastroPage.nomeLimpo();
  cadastroPage.emailLimpo();
});

Then("a mensagem de salvo com sucesso será exibida", function () {
  cadastroPage.mensagemSucesso();
});

Then(
  "aparecerá mensagem informando que o campo nome é obrigatório",
  function () {
    cadastroPage.mensagemNome();
  }
);

Then(
  "aparecerá mensagem informando que o campo email é obrigatório",
  function () {
    cadastroPage.mensagemEmail();
  }
);

Then("o site emite mensagem Formato de e-mail inválido", function () {
  cy.contains("Formato de e-mail inválido").should("be.visible");
});

Then("o site emite mensagem Formato do nome é inválido.", function () {
  cy.contains("Formato do nome é inválido.").should("be.visible");
});

Then(
  "o site emite mensagem Informe no máximo 100 caracteres para o nome",
  function () {
    cy.contains("Informe no máximo 100 caracteres para o nome").should(
      "be.visible"
    );
  }
);

Then(
  "o site emite mensagem Informe no máximo 60 caracteres para o e-mail",
  function () {
    cy.contains("Informe no máximo 60 caracteres para o e-mail").should(
      "be.visible"
    );
  }
);

Then(
  "o site emite mensagem Informe pelo menos 4 letras para o nome.",
  function () {
    cy.contains("Informe pelo menos 4 letras para o nome.").should(
      "be.visible"
    );
  }
);

Then(
  "o site emite mensagem Informe pelo menos 4 caracteres para o e-mail.",
  function () {
    cy.contains("Informe pelo menos 4 caracteres para o e-mail.").should(
      "be.visible"
    );
  }
);

Then(
  "aparecerá mensagem de erro informando que este e-mail já é utilizado por outro usuário",
  function () {
    cy.intercept("POST", "/api/v1/users", {
      statusCode: 422,
      body: {
        error: "User already exists.",
      },
    }).as("post");
    cy.contains("Erro").should("be.visible");
    cy.contains("Este e-mail já é utilizado por outro usuário.").should(
      "be.visible"
    );
  }
);

Then("o botão com opção de cancelar a operação", function () {
  cy.contains("Cancelar").click();
});
