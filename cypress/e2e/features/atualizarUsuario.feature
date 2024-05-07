# language: pt
Funcionalidade: Atualizar Usuário

Contexto: Usuario deve ter acessado a página inicial
Dado que acessei a pagina inicial do site

Cenário: Deve ser possível atualizar nome de usuario cadastrado
    E clico em Ver detalhes
    E clico no botao Editar
    E altero o nome do usuario
    Quando clico em Salvar
    Entao exibe mensagem de usuario atualizado
