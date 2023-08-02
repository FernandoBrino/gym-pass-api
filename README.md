# Gym Pass API

Esta é uma API Restful desenvolvida utilizando [Fastify](https://fastify.dev), vizando o aprendizado do microframework.

## Descrição

A Gym Pass Api é uma aplicação que visa aplicar o benefício do Gympass, que nada mais é que uma maneira dos colaboradores das mais diversas empresas possam com uma simples assinatura mensal sem contrato ou custo adicional adentrar em uma academia em suas proximidades.

## Recursos

A API oferece os seguintes recursos:

- **Usuários**: Operações básicas como criação de um usuário, autenticação e busca do perfil;

- **Academias**: Operações como criação de uma academia, busca pelo titúlo de uma academia e busca por academias próximas;

- **Check-ins** Operações como criação de um check-in, validação de um check-in, quantidade de check-ins por usuário (metricas) e um histórico de check-ins. 

## Instalação

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local:

1. Clone este repositório para o seu computador utilizando o comando:

```shell
git clone https://github.com/FernandoBrino/api-rest-fastify.git
```

2. Acesse o diretório do projeto:

```shell
cd api-rest-fastify
```

3. Instale as dependências do projeto:

```shell
npm install
```


4. Rode o Docker compose:

```shell
docker compose up
```

5. Rode as migrations do projeto:

```shell
npx prisma migrate dev
```

6. Inicie o servidor de desenvolvimento:

```shell
npm start
```

5. O servidor estará em execução localmente em `http://localhost:3333`.

## Utilização

Após iniciar o servidor, você poderá utilizar a API através de requisições HTTP. Aqui estão alguns exemplos de como interagir com os recursos disponíveis:

- **Usuários**
  - **POST /user**: Cria um novo usuário.
  - **POST /sessions**: Login.
  - **PATCH /token/refresh**: Atualiza access token.
  - **GET /me**: Obtém o perfil do usuário.
 
- **Academias**
  - **POST /gyms**: Cria uma nova academia.
  - **GET /gyms/search**: Procura por uma academia pelo título.
  - **GET /gyms/nearby**: Busca por academias próximas ao usuário.
 
- **Check-ins**
  - **POST /gyms/:gymId/check-ins**: Cria um novo check-in.
  - **GET /check-ins/history**: Busca pelo histórico de check-ins do usuário.
  - **GET /check-ins/metrics**: Busca pela quantidade de check-ins que o usuário realizou.
  - **PATCH /check-ins/:checkInId/validate**: Valida um check-in.

- **DTO's**
  
  Exemplo criação de um usuário:
  ```
    {
      "name": "John doe",
      "email": "johndoe@example.com",
      "password": "123456"
    }
  ```

  - name: O nome do usuário.
  - email: O e-mail do usuário.
  - password: Senha do usuário (min: 6).
    
 
  Exemplo criação de uma academia:
  ```
    {
      "title": "Example gym",
      "description": "An example gym",
      "phone": "13981158644",
      "latitude": -23.7370307,
      "longitude": -46.2366174
    }
  ```

  - title: Título da academia.
  - description: Descrição da academia.
  - phone: Número da academia.
  - latitude: Latitude da academia.
  - longitude: Longitude da academia.
 
  Exemplo criação de um check-in:
  ```
    {
      "latitude": -23.7370307,
      "longitude": -46.2366174
    }
  ```
  - latitude: Latitude da academia.
  - longitude: Longitude da academia.

Certifique-se de substituir `:id` pelos identificadores reais dos usuários ou produtos ao fazer requisições específicas.

## Contribuição

Contribuições são bem-vindas! Se você encontrou algum problema, tem sugestões ou deseja adicionar novos recursos, fique à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto está licenciado sob a ISC License.

---
Criado por [Fernando Brino](https://github.com/FernandoBrino)
