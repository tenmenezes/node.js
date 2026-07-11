# Contador de palavras duplicadas

Projeto didático do curso **Node.js: criando sua primeira biblioteca** (Alura). A aplicação lê um arquivo de texto, identifica palavras repetidas em cada parágrafo e gera um relatório com o resultado.

## O que o projeto faz

1. Lê um arquivo `.txt` informado via linha de comando
2. Divide o conteúdo em parágrafos (linhas separadas por quebra de linha)
3. Conta quantas vezes cada palavra aparece no parágrafo (ignorando pontuação e palavras com menos de 3 caracteres)
4. Salva em `result.txt` apenas as palavras que se repetem em cada parágrafo

Exemplo de saída:

```
Palavras duplicadas no parágrafo 3: que, você, tenha
Palavras duplicadas no parágrafo 12: que, estão
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior recomendado)

## Instalação

```bash
npm install
```

## Como usar

### Script de desenvolvimento

O `package.json` já inclui um atalho com arquivos de exemplo:

```bash
npm run dev
```

Equivalente a:

```bash
node src/cli.js -t doc/texto-web.txt -d doc/results
```

### Linha de comando

```bash
node src/cli.js --text <caminho-do-arquivo> --destiny <pasta-de-saida>
```

| Opção | Atalho | Descrição |
|-------|--------|-----------|
| `--text` | `-t` | Caminho do arquivo de texto a ser processado |
| `--destiny` | `-d` | Pasta onde o arquivo `result.txt` será salvo |

As duas opções são obrigatórias. Se alguma estiver faltando, a CLI exibe a ajuda e encerra.

### Arquivos de exemplo

A pasta `doc/` contém textos para teste:

- `doc/texto-web.txt` — artigo sobre como a Web funciona (MDN)
- `doc/texto-kanban.txt` — conteúdo sobre metodologia Kanban
- `doc/texto-aprendizado.txt` — texto adicional para prática

A saída gerada fica em `doc/results/result.txt`.

## Estrutura do projeto

```
00-curso-alura-node.js/
├── doc/
│   ├── texto-*.txt       # Arquivos de entrada
│   └── results/
│       └── result.txt    # Relatório gerado
├── src/
│   ├── cli.js            # Interface de linha de comando (Commander)
│   ├── index.js          # Lógica principal: contagem de palavras
│   ├── helpers.js        # Montagem do arquivo de saída
│   └── errors/
│       └── errorFunctions.js  # Tratamento de erros (ex.: arquivo não encontrado)
├── package.json
└── .gitignore
```

## Conceitos abordados

- **Módulos ES** (`import` / `export` e `"type": "module"`)
- **Leitura e escrita de arquivos** com `fs` e `fs.promises`
- **Operações assíncronas** com callbacks, Promises e `async/await`
- **CLI** com a biblioteca [Commander](https://github.com/tj/commander.js)
- **Saída colorida** no terminal com [Chalk](https://github.com/chalk/chalk)
- **Separação de responsabilidades** entre lógica principal, helpers e tratamento de erros

## Dependências

| Pacote | Uso |
|--------|-----|
| `commander` | Parsing de argumentos da linha de comando |
| `chalk` | Mensagens coloridas no terminal |

## Licença

ISC
