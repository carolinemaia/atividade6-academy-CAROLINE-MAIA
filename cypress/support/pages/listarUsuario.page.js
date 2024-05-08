export default class ListarUsuarioPag {
  botaoVoltarPag = "#paginacaoVoltar";
  botaoProxPag = "#paginacaoProximo";
  pagAtual = "#paginacaoAtual";
  nome = '[data-test="userDataName"]';
  email = '[data-test="userDataEmail"]';
  botaoDetalhar = "#userDataDetalhe";
  botaoDelete = '[data-test="userDataDelete"]';
  componenteTodosUsuarios = "#listaUsuarios #userData";
  paginaAtual = "#paginacaoAtual";

  proximaPag() {
    cy.get(this.botaoProxPag).click();
  }

  voltarPag() {
    cy.get(this.botaoVoltarPag).click();
  }

  getComponenteTodosUsuarios() {
    return cy.get(this.componenteTodosUsuarios);
  }
}
