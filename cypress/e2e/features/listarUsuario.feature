# language: pt
Funcionalidade: Listar Usuarios

Contexto: Usuario deve ter acessado a página inicial
Dado que acessei a pagina inicial do site

Cenário: Devo conseguir visualizar listagem de usuários quando há usuarios cadastrados 
    Quando visualizo que há usuarios cadastrados
    Então consigo consultar os usuarios na listagem

Cenário: Devo conseguir consultar usuarios em uma só página quando houver <= 6 usuarios cadastrados
    Quando o site tem <= 6 usuarios cadastrados
    Então o site terá 1 página
    E não consigo avançar a página
    E não consigo voltar página

Cenário: Devo conseguir avançar pagina quando há 12 usuários cadastrado
    Quando o site tem 12 usuarios cadastrados
    Então o site terá 2 páginas
    E consigo avançar para pagina 2
    E consigo retornar para pagina anterior
    

Cenário: Deve ser possivel visualizar os dados dos usuários ao listar os usuários
    Quando listo os usuarios cadastrados
    Então consigo visualizar nome de cada usuario
    E consigo visualizar email de cada usuario
    E consigo visualizar botão de detalhar de cada usuario
    E consigo visualizar botão de excluir de cada usuario

Cenário: O site deve retornar mensagem de usuario nao cadastrado quando não há usuarios registrados
    Quando verifico que não há usuarios cadastrados
    Então site retorna informando que não há usuários

    