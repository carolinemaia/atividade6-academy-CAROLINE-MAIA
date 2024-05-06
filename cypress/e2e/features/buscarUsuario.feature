# language: pt
Funcionalidade: Buscar usuários

Contexto: Usuario deve ter acessado a página inicial
    Dado que acessei a pagina inicial
    
Cenário: O campo de busca deve está ativo para digitar
    Quando clico no campo de busca
    Então consigo digitar qualquer termo

Cenário: Devo conseguir buscar usuario pelo Nome
    E clico no campo de busca
    Quando digito o nome do usuario cadastrado
    Entao consigo visualizar os resultados de usuarios com o nome buscado

Cenário: Devo conseguir buscar usuário pelo seu email cadastrado
    E clico no campo de busca
    Quando digito o e-mail cadastrado
    Então consigo visualizar o usuário que possui esse e-mail

Cenário: Devo conseguir ver detalhes dos dados do usuário ao buscar pelo email
    E clico no campo de busca
    Quando digito o e-mail cadastrado
    E clico em Ver detalhes
    Então visulizo todos os dados do usuário que possui esse email

Cenário: Devo conseguir navegar até os dados do usuário utilizando o id na barra de pesquisa do navegador
    Quando insiro o id após /users na barra de pesquisa do navegador
    Entao consigo visualizar todos os dados do usuário que possui este ID

Cenário: Deve retornar usuario inexiste ao buscar usuario não cadastrado 
    E clico no campo de busca
    Quando busco por um usuario não cadastrado
    Entao o site retorna informando que nao existe esse usuario

Cenário: Deve retornar opção para cadastro ao pesquisar usuario não cadastrado
    E clico no campo de busca
    Quando busco por um usuario não cadastrado
    Entao o site retorna informando que nao existe esse usuario
    E  informa opção de criar novo cadastro direcionando para tela de cadastro

Cenário: "Devo conseguir retornar para pagina inicial ao clicar no x do campo de busca após digitar caractere"
    E clico no campo de busca
    E digito um termo qualquer
    Quando clico no botão x do campo de busca
    Então o campo de busca é limpo
    E retorno para pagina inicial












    