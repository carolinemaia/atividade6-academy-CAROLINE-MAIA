export default class BuscarUsuario {
  campoId ='[name="id"]';
  campoNome = "#userName";
  campoEmail = "#userEmail";

  verDetalhes() {
    cy.get("#userDataDetalhe").click();
  }

  typeId(id) {
      cy.get(this.campoId).type(id);
  }
}