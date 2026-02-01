# 🚀 Fullstack Template — Next.js + NestJS + Prisma + Docker

Template fullstack moderno, **pensado para produtividade em desenvolvimento** e **estabilidade em produção**.

Este repositório serve como **base sólida** para:

* aplicações web
* APIs
* SaaS
* produtos próprios
* freelas profissionais

> ⚡ Menos setup. Mais produto.

---

## 🧱 Stack

### Frontend

* **Next.js (App Router)**
* **TypeScript**
* Estrutura preparada para páginas públicas e privadas
* Consumo de API centralizado

### Backend

* **NestJS**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL**
* **Clean Architecture (pragmática)**

### Infra

* **Docker + Docker Compose**
* Dois ambientes:

  * **DEV** → Docker apenas para banco
  * **PROD** → aplicação totalmente containerizada
* `.env.example` documentado

---

## 📁 Estrutura do Projeto

```bash
.
├── apps
│   ├── backend
│   │   ├── prisma
│   │   │   └── schema.prisma
│   │   └── src
│   │       ├── application
│   │       │   ├── dto
│   │       │   └── use-cases
│   │       ├── domain
│   │       │   ├── entities
│   │       │   └── repositories
│   │       ├── infra
│   │       │   ├── config
│   │       │   ├── database
│   │       │   │   ├── prisma
│   │       │   │   └── repositories
│   │       │   └── http
│   │       │       └── controllers
│   │       ├── shared
│   │       │   └── errors
│   │       └── main.ts
│   │
│   └── frontend
│       ├── app
│       │   ├── (public)
│       │   └── (private)
│       ├── components
│       ├── hooks
│       ├── services
│       │   └── api.ts
│       ├── types
│       └── utils
│
├── docker
│   ├── docker-compose.dev.yml
│   └── docker-compose.prod.yml
│
├── .env.example
├── .env
└── README.md
```

---

## 🧠 Filosofia do Template

Este template segue alguns princípios claros:

* **Desenvolvimento rápido primeiro**
* **Arquitetura clara, sem overengineering**
* **Separação de responsabilidades**
* **Docker como ferramenta, não obstáculo**

> Organização boa é a que **não atrapalha o desenvolvimento**
> e **permite escalar quando necessário**.

---

## ⚙️ Pré-requisitos

### Para desenvolvimento (DEV)

* Node.js (recomendado v20+)
* pnpm
* Docker
* Docker Compose

### Para produção (PROD)

* Docker
* Docker Compose

---

## 🚀 Ambiente de Desenvolvimento (DEV)

No ambiente de desenvolvimento:

* Frontend e backend rodam **localmente**
* Docker é usado **apenas para o banco de dados**
* `pnpm add` funciona normalmente
* Hot reload rápido

### 1️⃣ Subir o banco de dados

```bash
docker compose -f docker/docker-compose.dev.yml up
```

### 2️⃣ Backend

```bash
cd apps/backend
pnpm install
pnpm start:dev
```

### 3️⃣ Frontend

```bash
cd apps/frontend
pnpm install
pnpm dev
```

---

## 🌐 Acessos padrão (DEV)

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:3001](http://localhost:3001)

---

## 🧬 Prisma (DEV)

### Gerar o client

```bash
cd apps/backend
pnpm prisma generate
```

### Rodar migrations

```bash
pnpm prisma migrate dev
```

---

## 🐳 Ambiente de Produção (PROD)

Em produção:

* Frontend, backend e banco rodam em containers
* Código vem da **imagem Docker**
* Sem volumes de código
* Ambiente previsível e estável

### Subir ambiente completo

```bash
docker compose -f docker/docker-compose.prod.yml up --build
```

---

## 🧼 Clean Architecture — Backend

A arquitetura do backend segue uma **Clean Arch pragmática**:

### Camadas

* **Domain**

  * Entidades
  * Contratos (repositórios)
  * Não depende de framework

* **Application**

  * Casos de uso
  * DTOs
  * Orquestra regras de negócio

* **Infra**

  * Controllers (HTTP)
  * Prisma
  * Implementações concretas

### Regra principal

> Camadas internas **não conhecem** camadas externas.

Exemplo:

* Controller → Use Case ✅
* Use Case → Prisma ❌

---

## 🧪 CRUD de Exemplo

O template já possui um **CRUD de User** como referência:

* Entidade de domínio
* Use case de criação
* Controller HTTP
* Repositório Prisma

Esse CRUD serve como:

* documentação viva
* padrão para novas features
* base para expansão do sistema

---

## 🌐 Organização do Frontend

O frontend é organizado por **intenção**, não por tecnologia:

* `(public)` → páginas públicas
* `(private)` → páginas protegidas
* `services/` → comunicação com API
* `components/` → UI reutilizável
* `hooks/` → lógica compartilhada

Isso facilita:

* manutenção
* escalabilidade
* separação futura (se necessário)

---

## 🔐 Variáveis de Ambiente

Arquivo base:

```bash
.env.example
```

Exemplo:

```env
# FRONTEND
FRONTEND_PORT=3000

# BACKEND
BACKEND_PORT=3001

# DATABASE
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/database
```

---

## 📌 Quando separar front e back?

Este template **permite**, mas **não exige** separação imediata.

Separar faz sentido quando:

* deploys precisam ser independentes
* times crescem
* o projeto vira produto maior

Até lá, manter juntos **simplifica e acelera**.

---

## 🏷️ Versionamento do Template

Recomendado usar tags:

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## 🎯 Objetivo Final

Este template existe para:

* acelerar ideias
* reduzir setup repetitivo
* servir como base confiável
* evoluir junto com o projeto

> **Construa rápido.
> Organize com intenção.
> Escale quando fizer sentido.**