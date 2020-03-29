#### Tipos de parâmetros:

- Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) _request.query_
- Route Params: Parâmetros utilizados para identificar recursos _request.params_
- Request Body: Corpo da requisição, utilizado para criar ou alterar recursos _request.body_

#### Nodemon:

Utilizado para Hot Reload no código  
_Lembrar de instalar como dependência de dev_

#### Comunicação com o DB:

- Driver: "SELECT \* FROM users"
- Query Builder: table('users').select(\*).where()

#### PaP com knex js

- npm install knex
- npm install "nome_db"
- npx knex init
- npx knex _Para ver todos os comandos do knex_
- npx knex:status _Para ver todas migrations executadas_

#### Migrations

Forma de criar tabelas e manter um histórico das alterações que foram feitas, como se fosse um versionamento do banco de dados

#### Migrations com knex js

- criar folder para migrations
- no arquivo knexfile.js, criar a propriedade migration
- npx knex migrate:make name_migration
- npx knex migrate:latest

#### CORS

- Módulo de segurança que determina que pode acessar API
- cors(); permite que qualquer aplicação front-end acesse nossa API
- passando um objeto com a url do front-end na propriedade origin, liberamos o acesso

#### Celebrate
- Biblioteca para fazer validações
- Nota: Lembrar de configurar um DB para teste

#### Jest
- Biblioteca de testes
- Sempre zerar o DB de teste antes de realizar um novo teste

#### Supertest
- Biblioteca para chamadas na API nos test - Axios _não_ é recomendado
- Para setar propriedades do Header, utilizar *.set('key', 'value')*

### Cross-env
- Biblioteca para simplificar o uso das variáveis de ambiente
- Mais sobre variáveis de ambiente no node: https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/ 

#### Hospedagem
- Heroku: free  
- Digital Ocean: Comercial ($5/mo) - *90% das aplicações vai se encaixar aqui*
- Azure, Aws, Google Cloud... Quando a aplicação toma grandes proporções

#### Atividades extra:
- Finalizar validações das rotas
