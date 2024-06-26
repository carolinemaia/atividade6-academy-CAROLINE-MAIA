# language: pt
Funcionalidade: Listar Usuarios

Contexto: Usuario deve ter acessado a página inicial
Dado que acessei a pagina inicial do site

Cenário: Devo conseguir consultar a lista de usuários quando há usuarios cadastrados 
    Quando visualizo que há usuarios cadastrados
    Então consigo consultar os usuarios na listagem

Cenário: Devo conseguir consultar usuarios em uma só página quando houver 6 usuarios cadastrados
    Quando o site tem 6 usuarios cadastrados
    Então o site terá somente 1 página
    E não consigo avançar a página
    E não consigo voltar página

Cenário: Devo conseguir avançar pagina quando há 12 usuários cadastrado
    Quando o site tem 12 usuarios cadastrados
    Então o site terá 2 páginas
    E consigo avançar para pagina 2
    E consigo retornar para pagina 1
 
Cenário: Deve ser possivel visualizar os dados dos usuários ao listar os usuários
    Quando listo os usuarios cadastrados
    Então consigo visualizar nome de cada usuario
    E consigo visualizar email de cada usuario
    E consigo visualizar botão de detalhar de cada usuario
    E consigo visualizar botão de excluir de cada usuario

Cenário: O site deve retornar mensagem de usuario nao cadastrado quando não há usuarios registrados
    Quando não há usuario cadastrado
    Então site retorna informando que não há usuários

Cenário: Deve ser possivel existir opção para cadastrar usuario quando não houver usuario cadastrado
    Quando não há usuario cadastrado
    Então o site retorna opção de cadastrar usuario

Cenário: Botão novo deve está habilitado quando não há usuario cadastrado
    Quando não há usuario cadastrado
    Então o botão Novo deve está habilitado direcionando para pagina de Cadastro
    

    