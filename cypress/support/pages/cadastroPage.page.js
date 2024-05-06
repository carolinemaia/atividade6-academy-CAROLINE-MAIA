export default class CadastroPage {
  inputNome = "#name";
  inputEmail = "#email";

  buttonSalvar = "[type='submit']";

  typeNome(nome) {
    cy.get(this.inputNome).type(nome);
  }

  typeEmail(email) {
    cy.get(this.inputEmail).type(email);
  }

  clickSalvar() {
    cy.contains("Salvar").click();
  }

  clickNovo() {
    cy.contains("Novo").click();
    
  }

  registrarUsuario(nome, email) {
    // cy.contains("Novo").click();
    cy.get(this.inputNome).type(nome);
    cy.get(this.inputEmail).type(email);
    cy.contains("Salvar").click();
  }

  registrarUsuario2(nome, email) {
    cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
    cy.contains("Novo").click();
    cy.get(this.inputNome).type(nome);
    cy.get(this.inputEmail).type(email);
    cy.contains("Salvar").click();
  }

  nomeLimpo() {
    cy.get("#name").invoke("val").should("be.empty");
  }

  emailLimpo() {
    cy.get("#email").invoke("val").should("be.empty");
  }

  mensagemSucesso() {
    cy.contains("Usuário salvo com sucesso!").should("be.visible");
  }

  mensagemNome() {
    cy.contains("O campo nome é obrigatório.").should("be.visible");
  }

  mensagemEmail() {
    cy.contains("O campo e-mail é obrigatório.").should("be.visible");
  }
}
