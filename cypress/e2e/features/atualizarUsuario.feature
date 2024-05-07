# language: pt
Funcionalidade: Atualizar Usuário

Contexto: Usuario deve ter acessado a página inicial
Dado que acessei a pagina inicial do site

Cenário: Deve ser possível atualizar nome de usuario cadastrado
    E pesquiso por usuario cadastrado
    E consulto os detalhes do usuario
    E inicio a ediçao do nome do usuario
    Quando confirmo a operaçao
    Entao exibe mensagem de usuario atualizado
    E o novo nome deve ser mostrado no cadastro do usuario

Cenário: Deve ser possível atualizar email de usuario cadastrado
    Dado que acessei a pagina inicial do site
    E pesquiso por usuario cadastrado
    E inicio a ediçao do email do usuario
    Quando confirmo a operaçao
    Entao exibe mensagem de usuario atualizado
    E o novo email deve ser mostrado no cadastro do usuario




    