# language: pt
Funcionalidade: Buscar usuários

Cenário: Devo conseguir buscar usuário pelo e-mail quando estiver cadastro
    Dado que acessei a página inicial
    E localizo o campo de busca
    Quando digito o e-mail cadastrado
    Então consigo visualizar o usuário que possui esse e-mail

Cenário: Deve ser possível ver detalhes dos dados do usuários ao clicar em "Ver Detalhes"
    