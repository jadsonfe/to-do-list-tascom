# To-Do List - Task Management API

Este projeto é uma API desenvolvida em **Node.js** utilizando **Express** e **Sequelize** com **PostgreSQL** como banco de dados. A API permite o gerenciamento de tarefas (*Tasks*), que podem conter etiquetas (*Tags*), e está integrada a um sistema de usuários (*Users*).

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Sequelize ORM**
- **PostgreSQL**
- **DBeaver (para visualização do banco de dados, opcional)**

## 📦 Instalação

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar o Banco de Dados

Antes de rodar a aplicação, é necessário configurar o banco de dados PostgreSQL.

- **Se ainda não tiver o PostgreSQL instalado no WSL**, instale com:
  ```bash
  sudo apt update
  sudo apt install postgresql postgresql-contrib
  ```
- **Iniciar o serviço do PostgreSQL:**
  ```bash
  sudo service postgresql start
  ```
- **Criar o banco de dados manualmente (se necessário):**
  ```bash
  sudo -u postgres psql
  CREATE DATABASE to_do_list;
  \q
  ```
- **Configurar a conexão do banco no arquivo** `src/config/database.js`.

### 4. Rodar as migrations para criar as tabelas

```bash
npx sequelize-cli db:migrate
```

## ▶️ Executando o Projeto

Após configurar tudo corretamente, você pode iniciar o servidor com:

```bash
npm run dev
```

O servidor será iniciado e rodará em `http://localhost:3000` (ou na porta definida no seu ambiente).

## 🛠 Funcionalidades

- Criar, listar, atualizar e deletar **usuários**
- Criar, listar, atualizar e deletar **tarefas**
- Criar, listar, atualizar e deletar **tags**
- Associar **tags** a **tarefas**

## 📂 Estrutura do Projeto

```
📁 src
├── 📁 config      # Configuração do banco de dados
├── 📁 models      # Modelos do Sequelize
├── 📁 migrations  # Migrations do banco de dados
├── 📁 controllers # Controladores das rotas
├── 📁 routes      # Definição das rotas
└── server.js      # Arquivo principal do servidor
```

## 🛠 Comandos Úteis

- **Desfazer última migration:**
  ```bash
  npx sequelize-cli db:migrate:undo
  ```
- **Desfazer todas as migrations:**
  ```bash
  npx sequelize-cli db:migrate:undo:all
  ```

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para contribuir e melhorar! 🚀

