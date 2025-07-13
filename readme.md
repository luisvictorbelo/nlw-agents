# NLW-Agents

Projeto desenvolvido durante o evento **NLW-Agents**. O NLW-Agents é uma aplicação fullstack que permite criar salas de perguntas, gravar áudios, transcrever conteúdos com IA e responder perguntas com base no contexto fornecido. O sistema utiliza tecnologias modernas de frontend e backend, integrando recursos de inteligência artificial para transcrição e resposta automática.

---

## 🚀 Tecnologias Utilizadas

- **Frontend**
  - React
  - Vite
  - TypeScript
  - Tailwind CSS
  - React Hook Form
  - Zod
  - React Query
  - Lucide Icons

- **Backend**
  - Node.js
  - Fastify
  - Drizzle ORM
  - PostgreSQL + pgvector
  - Google Gemini API
  - Zod

- **DevOps**
  - Docker
  - Docker Compose

---

## 💻 Como rodar o projeto localmente

### Pré-requisitos

- Node.js (v18+)
- Docker e Docker Compose
- pnpm ou npm ou yarn

### Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/nlw-agents.git
   cd nlw-agents
   ```

2. **Suba o banco de dados com pgvector:**
   ```sh
   cd server
   docker-compose up -d
   ```

3. **Configure as variáveis de ambiente:**
   - Copie `server/.env.example` para `.env` em `server` e preencha com sua chave da API Gemini.

4. **Instale as dependências:**
   ```sh
   # No diretório server
   pnpm install
   # ou npm install
   # ou yarn

   # No diretório web
   cd ../web
   pnpm install
   # ou npm install
   # ou yarn
   ```

5. **Execute as migrations e seed do banco:**
   ```sh
   # No diretório server
   pnpm db:migrate
   pnpm db:seed
   ```

### Execução

- **Backend:**
  ```sh
  pnpm dev
  ```
  O servidor estará disponível em `http://localhost:3333`.

- **Frontend:**
  ```sh
  pnpm dev
  ```
  O frontend estará disponível em `http://localhost:5173`.

---

## ✨ Funcionalidades Principais

- Criação de salas de perguntas
- Listagem de salas recentes
- Envio e listagem de perguntas e respostas
- Gravação e upload de áudios para transcrição automática via IA
- Respostas automáticas baseadas no contexto transcrito
- Interface moderna e responsiva

---

## 📁 Estrutura de Pastas

```
nlw-agents/
├── server/
│   ├── src/
│   │   ├── db/
│   │   │   ├── schema/
│   │   │   ├── http/routes/
│   │   │   └── ...
│   │   ├── services/
│   │   └── ...
│   ├── docker/
│   └── ...
├── web/
│   ├── src/
│   │   ├── components/
│   │   ├── http/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── ...
│   └── ...
└── ...
```

---

> Projeto criado durante o evento NLW-Agents 🚀