# Student Management System Backend

A scalable backend application built using TypeScript, Express.js, Prisma ORM, and PostgreSQL following Repository Pattern and Clean Architecture principles.

---

## 🚀 Tech Stack

- TypeScript
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

---

## 🏗️ Architecture

- Modular Architecture
- Repository Pattern
- DTO Pattern
- Clean Architecture
- OOP Principles

---

## 📦 Features

- Student CRUD
- Teacher CRUD
- Course Management
- Enrollment Management
- Marks Management
- Prisma ORM Integration
- PostgreSQL Database

---

## 📁 Project Structure

```bash
src/
 ├── config
 ├── modules
 │    ├── student
 │    ├── teacher
 │    ├── course
 │    └── enrollment
 ├── app.ts
 └── server.ts
```

---

## ⚙️ Installation

```bash
npm install
```

---

## 🔥 Run Development Server

```bash
npm run dev
```

---

## 🛠️ Prisma Commands

Generate Prisma Client:

```bash
npx prisma generate
```

Run Migration:

```bash
npx prisma migrate dev --name init
```

Open Prisma Studio:

```bash
npx prisma studio
```