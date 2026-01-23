# 🚀 Fullstack Template — Next.js + NestJS + Prisma + Docker

Template fullstack moderno para acelerar o desenvolvimento de aplicações web, SaaS e APIs.

Este repositório foi criado para **não perder tempo com setup** e focar direto em produto.

---

## 🧱 Stack

### Frontend

* **Next.js**
* **TypeScript**
* Ambiente pronto via Docker

### Backend

* **NestJS**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL**
* Arquitetura modular

### Infra

* **Docker + Docker Compose**
* `.env.example` configurado
* Containers orquestrados automaticamente

---

## 📁 Estrutura do Projeto

```bash
.
├── apps
│   ├── frontend   # Next.js
│   └── backend    # NestJS + Prisma
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## ⚙️ Pré-requisitos

* Docker
* Docker Compose
* Git

> ❌ Não é necessário instalar Node, Prisma ou Postgres localmente

---

## 🚀 Como usar este template

### 1️⃣ Criar um projeto a partir do template

* Clique em **“Use this template”** no GitHub
* Crie um novo repositório

### 2️⃣ Clone o repositório

```bash
git clone <seu-repo>
cd <seu-repo>
```

### 3️⃣ Configure as variáveis de ambiente

```bash
cp .env.example .env
```

> Ajuste os valores se desejar (porta, banco, etc)

---

### 4️⃣ Suba tudo com Docker

```bash
docker-compose up --build
```

✅ Frontend
✅ Backend
✅ PostgreSQL
✅ Prisma conectado

Tudo sobe automaticamente 🚀

---

## 🌐 Acessos padrão

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:3333](http://localhost:3333)

---

## 🧬 Prisma

### Gerar client (se necessário)

```bash
docker compose exec backend npx prisma generate
```

### Rodar migrations

```bash
docker compose exec backend npx prisma migrate dev
```

---

## 🔄 Prisma + Postgres (opcional)

Este template já vem com Prisma e PostgreSQL configurados.

Se não quiser usar:

* Remova o serviço `db` do `docker-compose.yml`
* Remova a pasta `prisma/`
* Ajuste o backend conforme necessário

---

## 📌 Objetivo do Template

* Acelerar projetos
* Evitar setup repetitivo
* Servir como base para:

  * SaaS
  * Freelance
  * APIs
  * Produtos próprios

---

## 🧠 Filosofia

> Configure uma vez.
> Reuse sempre.
> Foque no que gera valor.

---

## 🏷️ Versionamento

Use tags para controlar evolução do template:

```bash
git tag v1.0.0
git push origin v1.0.0
```