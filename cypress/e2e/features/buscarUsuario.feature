# language: pt
Funcionalidade: Buscar usuários

Contexto: Usuario deve ter acessado a página inicial
Dado que acessei a pagina inicial do site
E clico no campo de busca
    
Cenário: O campo de busca deve está ativo para digitar
    Quando clico no campo de busca
    Então consigo digitar qualquer termo

Cenário: Devo conseguir buscar usuario pelo Nome
    Quando digito o nome do usuario cadastrado
    Entao consigo visualizar os resultados de usuarios com o nome buscado

Cenário: Devo conseguir buscar usuário pelo seu email cadastrado
    Quando digito o e-mail cadastrado
    Então consigo visualizar o usuário que possui esse e-mail

Cenário: Devo conseguir ver detalhes dos dados do usuário ao buscar pelo email
    Quando digito o e-mail cadastrado
    E consulto os detalhes do usuario
    Então visulizo todos os dados do usuário que possui esse email

Cenário: Deve retornar usuario inexiste ao buscar usuario não cadastrado 
    Quando busco por um usuario não cadastrado
    Entao o site retorna informando que nao existe esse usuario

Cenário: Deve retornar opção para cadastro ao pesquisar usuario não cadastrado
    Quando busco por um usuario não cadastrado
    Entao o site retorna informando que nao existe esse usuario
    E  informa opção de criar novo cadastro direcionando para tela de cadastro

Cenário: Devo conseguir retornar para pagina inicial ao clicar no x do campo de busca após digitar caractere
    E digito um termo qualquer
    Quando clico no botão x do campo de busca
    Então o campo de busca é limpo
    E retorno para pagina inicial












    