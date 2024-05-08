# language: pt
Funcionalidade: Cadastro de usuário

Contexto: Usuario deve ter acessado a página de cadastro
    Dado que acessei a pagina inicial
    Quando clicar em Novo

Cenário: Deve ser possível cadastrar usuário com sucesso
    E informar um nome valido
    E informar um email valido
    E confirmar operação
    Então os campos nome e email serão limpos
    E a mensagem de salvo com sucesso será exibida

Cenário: Nao deve ser possivel cadastrar um usuário sem inserir um nome válido no campo Nome
    E informar um email valido
    E confirmar operação
    Então aparecerá mensagem informando que o campo nome é obrigatório
    
Cenário: Nao deve ser possivel cadastrar um usuário sem inserir um email válido no campo E-mail
    E informar um nome valido
    E confirmar operação
    Então aparecerá mensagem informando que o campo email é obrigatório

Cenário: Não deve ser possível cadastrar um usuário com e-mail já cadastrado por outro usuário
    E informar um nome valido
    E informar um email ja cadastrado por outro usuário
    E confirmar operação
    Então aparecerá mensagem de erro informando que este e-mail já é utilizado por outro usuário
    E ficará disponivel o botão com opção de cancelar a operação

    
Esquema do Cenário: Não deve ser possível cadastrar um usuário com formato de nome inválido
   E informar um nome com formato invalido "<nome>"
   E informar um email valido
   E confirmar operação
   Entao o site emite mensagem Formato do nome é inválido.
   Exemplos:
      |     nome        |
      |     1234        |
      |  Carol M4ia     |
      |     C@rol       |
      | C  23.........a |

Esquema do Cenário: Nao deve ser possível cadastrar um usuário com formato de email inválido
    E informar um nome valido
    E informar um email com formato invalido "<email>"
    E confirmar operação
    Então o site emite mensagem Formato de e-mail inválido
    Exemplos:
      |      email      |
      | carol@com       |
      | carolgmail.com  |
      | @.com.br        |
      |       @@@2      |
      |      1234       |


Cenário: Não deve ser possível cadastrar um usuario com nome maior que 100 caracteres
    E informar um nome com mais de 100 caracteres
    E informar um email valido
    E confirmar operação
    Entao o site emite mensagem Informe no máximo 100 caracteres para o nome
    

Cenário: Não deve ser possivel cadastrar um usuario com email maior que 60 caracteres
    E informar um nome valido
    E informar um email com mais de 60 caracteres
    E confirmar operação
    Entao o site emite mensagem Informe no máximo 60 caracteres para o e-mail
    

Cenário: Não deve ser possível cadastrar um usuario com nome menor que 4 letras
    E informar um nome com menos de 4 letras
    | nome | abc |
    E informar um email valido
    E confirmar operação
    Entao o site emite mensagem Informe pelo menos 4 letras para o nome.
    

Cenário: Não deve ser possível cadastrar um email menor que 4 caracteres
    E informar um nome valido
    E informar um email com menos de 4 caracteres
    | email | @ |
    E confirmar operação
    Entao o site emite mensagem Informe pelo menos 4 caracteres para o e-mail.



