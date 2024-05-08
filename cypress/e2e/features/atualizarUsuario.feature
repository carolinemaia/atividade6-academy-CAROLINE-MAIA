# language: pt
Funcionalidade: Atualizar Usuário

Contexto: Usuario deve ter acessado a página inicial
    Dado que acessei a pagina inicial do site
    E pesquiso por usuario cadastrado
    E consulto os detalhes do usuario

    Cenario: Nao deve ser possivel atualizar usuario com campo nome em branco
    E inicio a ediçao do nome do usuario
    E limpo o campo de Nome
    Quando confirmo a operaçao
    Entao o site emite mensagem informando que nome é obrigatório

    Cenario: Nao deve ser possivel atualizar usuario com campo email em branco
    E inicio a ediçao do email do usuario
    E limpo o campo de Email
    Quando confirmo a operaçao
    Entao o site emite mensagem informando que email é obrigatório

Esquema do Cenário: Não deve ser possível atualizar usuario com nome em formato invalido
    E inicio a ediçao do nome do usuario
    E atualizo o nome em formato invalido "<nome>"
    Quando confirmo a operaçao
    Entao o site emite mensagem Formato do nome é inválido
    Exemplos:
      |            nome           |
      |            V1ana          |
      |          1ar0l Maia       |
      |            C@rol          |
      |            @123           |

Esquema do Cenário: Não deve ser possível atualizar usuario com email em formato invalido
    E inicio a ediçao do email do usuario
    E atualizo o email em formato invalido "<email>"
    Quando confirmo a operaçao
    Entao o site emite mensagem Formato do email é inválido
    Exemplos:
      |          email            |
      |         1@.com            |
      |     carolmaia.com.br      |
      |          C@rolcom         |
      |       123.visit.br        |

Cenário: Deve ser possível atualizar nome de usuario cadastrado
    E inicio a ediçao do nome do usuario
    E atualizo o nome do usuário com formato válido
    Quando confirmo a operaçao
    Entao exibe mensagem de usuario atualizado
    E o novo nome deve ser mostrado no cadastro do usuario

Cenário: Deve ser possível atualizar email de usuario cadastrado
    E inicio a ediçao do email do usuario
    E atualizo o email do usuario com formato válido
    Quando confirmo a operaçao
    Entao exibe mensagem de usuario atualizado
    E o novo email deve ser mostrado no cadastro do usuario




    