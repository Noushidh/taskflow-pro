# ✨ TaskFlow

> A modern, user-friendly task management application designed to make everyday productivity simple, organized, and enjoyable.

TaskFlow is a responsive task management application built with **React, TypeScript, Tailwind CSS, and Vite**. It provides an engaging interface for creating, organizing, and managing tasks with features such as emojis, task pinning, editing, completion tracking, detailed views, and user-friendly notifications.

🚀 **Live Demo:**  
https://taskflow-pro-two-tan.vercel.app/

---

## 📌 Overview

TaskFlow is designed to provide a simple yet engaging experience for managing everyday tasks.

Instead of presenting tasks through a basic list, TaskFlow focuses on creating a more enjoyable productivity experience with a visually appealing interface and intuitive task actions.

Users can:

- Create new tasks
- Add emojis to personalize tasks
- Edit task information
- Pin important tasks
- Mark tasks as completed
- View detailed task information
- Delete tasks
- Receive feedback through notifications

The project is built with a **component-based React architecture** and uses **TypeScript** to provide type safety and maintainable code.

---

## ✨ Features

### 📝 Task Management

- Create new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- View complete task details

### 📌 Task Organization

- Pin important tasks
- Add emojis to tasks
- Organize tasks through categories and task properties
- Display task information in a clean card-based interface

### 🎨 User Experience

- Modern and visually engaging interface
- Responsive layout
- Interactive task actions
- User-friendly notifications
- Clean and intuitive navigation
- Simple task creation workflow

### 💻 Development

- Fully written in TypeScript
- Reusable React components
- Centralized type definitions
- Utility-based application structure
- Maintainable project organization
- Production-ready Vite build
  

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | Building the user interface |
| **TypeScript** | Type safety and maintainable development |
| **Tailwind CSS** | Responsive and utility-first styling |
| **Vite** | Development server and production build |
| **Notyf** | User notifications |
| **ESLint** | Code quality and consistency |
| **Vercel** | Application deployment |

---

## 🏗️ Architecture

TaskFlow follows a **component-based frontend architecture**.

```text
                    ┌──────────────────┐
                    │      App.tsx     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │      Pages       │
                    │                  │
                    │   Home           │
                    │   TaskFormPage   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    Components    │
                    │                  │
                    │ TaskCard         │
                    │ TaskForm         │
                    │ FormInput        │
                    │ FormSelect       │
                    │ EmojiPicker      │
                    │ TaskDetails      │
                    └────────┬─────────┘
                             │
                ┌────────────┴────────────┐
                ▼                         ▼
        ┌───────────────┐         ┌───────────────┐
        │    Types      │         │     Utils     │
        │               │         │               │
        │    Task.ts    │         │    Notyf      │
        │               │         │ Task Messages │
        └───────────────┘         └───────────────┘
```

## 📂 Project Structure

```text
taskflow/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── AddTaskButton.tsx
│   │   ├── DeleteTask.tsx
│   │   ├── EmojiPickerButton.tsx
│   │   ├── FormInput.tsx
│   │   ├── FormSelect.tsx
│   │   ├── ShowTaskDetails.tsx
│   │   ├── TaskCard.tsx
│   │   └── TaskForm.tsx
│   │
│   ├── constants/
│   │   └── colors.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── TaskFormPage.tsx
│   │
│   ├── types/
│   │   └── Task.ts
│   │
│   ├── utils/
│   │   ├── notyf.ts
│   │   └── taskMessages.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 🎯 Key Concepts Demonstrated

- ⚛️ React component-based architecture
- 🔷 TypeScript type safety
- 🎨 Tailwind CSS utility-first styling
- 🧩 Reusable components
- 📝 Form handling
- 🔄 React state management
- 🖱️ Event handling
- 🔀 Conditional rendering
- 🔔 User feedback and notifications
- 📱 Responsive design
- 🗂️ Organized project structure
- 🛠️ Utility functions
- 📋 Centralized constants
- ⚡ Vite development workflow
- 🚀 Production deployment with Vercel

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/Noushidh/taskflow-pro.git
