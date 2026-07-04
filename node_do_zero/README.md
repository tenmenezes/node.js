# Node do Zero

API REST simples para cadastro, listagem, atualização e remoção de vídeos.

Este projeto faz parte dos meus estudos em Node.js e tem como foco praticar a criação de servidores HTTP, rotas REST, integração com PostgreSQL e organização básica de uma aplicação backend.

## Tecnologias

- Node.js
- Fastify
- PostgreSQL
- Neon Database
- Dotenv

## Funcionalidades

- Criar um vídeo.
- Listar todos os vídeos.
- Buscar vídeos pelo título.
- Atualizar um vídeo existente.
- Remover um vídeo.

## Requisitos

- Node.js instalado.
- Uma URL de conexão PostgreSQL, como a fornecida pelo Neon.

## Configuração

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` com base no `.env.example`:

```env
DATABASE_URL='postgresql://usuario:senha@host/database?sslmode=require'
```

Crie a tabela no banco:

```bash
node create-table.js
```

## Executando

Modo desenvolvimento, com reinicio automático:

```bash
npm run dev
```

Modo padrão:

```bash
npm start
```

O servidor será iniciado em:

```txt
http://localhost:3333
```

## Rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/videos` | Cria um novo vídeo. |
| `GET` | `/videos` | Lista todos os vídeos. |
| `GET` | `/videos?search=node` | Busca vídeos pelo título. |
| `PUT` | `/videos/:id` | Atualiza um vídeo pelo ID. |
| `DELETE` | `/videos/:id` | Remove um vídeo pelo ID. |

## Exemplo de criação

```http
POST http://localhost:3333/videos
Content-Type: application/json

{
  "title": "video node",
  "description": "Esse é um vídeo sobre Node.js",
  "duration": 180
}
```

## Estrutura

```txt
node_do_zero/
├── create-table.js
├── database-memory.js
├── database-portgres.js
├── db.js
├── routes.http
├── server.js
└── package.json
```

## Observações

- O arquivo `routes.http` contém exemplos de requisições para testar a API.
- O projeto possui uma implementação em memória em `database-memory.js`, útil para estudos e testes locais sem banco.
- A implementação ativa atualmente usa PostgreSQL em `database-portgres.js`.
