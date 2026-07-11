# Persistência, Redes e Compose

## Volumes

Volumes servem para persistir dados. Por padrão, se você apagar um container, os dados dentro dele podem ser perdidos. Com volume, os dados ficam fora do ciclo de vida do container.

Exemplo com PostgreSQL:

```bash
docker run -d \
  --name meu-postgres \
  -e POSTGRES_PASSWORD=123456 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres
```

| Parte | Significado |
| --- | --- |
| `postgres_data` | Volume gerenciado pelo Docker |
| `/var/lib/postgresql/data` | Caminho onde o PostgreSQL salva dados no container |

Resumo:

```text
Container pode ser removido.
Volume continua existindo.
Dados ficam preservados.
```

## Bind mount

Bind mount liga uma pasta da máquina a uma pasta dentro do container.

```bash
docker run -v $(pwd):/app node:20
```

Isso liga a pasta atual da sua máquina à pasta `/app` dentro do container.

É muito usado em desenvolvimento, porque você altera o código na máquina e o container enxerga essas alterações.

| Tipo | Como pensar |
| --- | --- |
| Volume | Gerenciado pelo Docker |
| Bind mount | Pasta específica da sua máquina ligada ao container |

## Variáveis de ambiente

Variáveis de ambiente configuram containers sem deixar tudo fixo no código.

```bash
docker run -e POSTGRES_PASSWORD=123456 postgres
```

Usos comuns:

- senha de banco;
- usuário;
- porta;
- ambiente;
- URL de conexão;
- chaves de API;
- configurações da aplicação.

Em projetos reais, essas informações costumam ficar em arquivos `.env`. Tome cuidado para não copiar `.env` para dentro da imagem e não subir esse arquivo para o Git.

## Redes

Containers podem se comunicar usando redes Docker.

```text
api -> banco postgres
frontend -> api
nginx -> frontend
```

Quando usamos Docker Compose, ele normalmente cria uma rede automaticamente para os serviços do projeto. Assim, uma API pode acessar o banco pelo nome do serviço:

```text
postgres
```

Em vez de depender diretamente de um IP.

## Docker Compose

Docker Compose serve para rodar vários containers juntos usando um arquivo de configuração.

Nomes comuns do arquivo:

```text
docker-compose.yml
compose.yml
```

Fluxo mental:

```text
Dockerfile = cria uma imagem
docker run = roda um container
Docker Compose = organiza vários containers juntos
```

Exemplo:

```yaml
services:
  api:
    build: .
    ports:
      - "3000:3000"

  postgres:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: 123456
```

Subir os serviços:

```bash
docker compose up
```

Parar e remover os serviços criados pelo Compose:

```bash
docker compose down
```

## Checklist para projetos

| Necessidade | Recurso Docker |
| --- | --- |
| Guardar dados do banco | Volume |
| Refletir código local dentro do container | Bind mount |
| Configurar senha, porta ou ambiente | Variável de ambiente |
| Conectar API, banco e frontend | Network |
| Subir vários serviços juntos | Docker Compose |
