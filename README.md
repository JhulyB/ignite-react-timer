# Ignite Reactjs - Timer: Task Timer App for Focused Work Sessions

This is a project from [Rocketseat](https://app.rocketseat.com.br/) lessons . The coding school that brings together the largest community of devs in Latin America and offers a complete platform for continuous learning in programming with diverse training for professionals of all levels and career stages. 

## Table of contents

- [Overview](#overview)
  - [The application](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)


## Overview

### The application

Task timer app. This tool allows the user to focus on the task for the timed period. Completed, interrupted and ongoing tasks can be reviewed in the history.
A task timer app helps users stay focused by breaking tasks into timed intervals, commonly known as the Pomodoro technique. It allows users to track their ongoing, completed, and interrupted tasks in a history section.

### Screenshot

![](./src/assets/home.png)

## My process

### My process

I used **React** to build the interactive components, **Styled-components** for the UI design, and **Formik** & **Zod** to manage forms and validation. To persist data (like tasks and their statuses), I leveraged **Immer** to keep the state immutable while simplifying updates.

The project was built using **Vite** for a fast development environment, and **TypeScript** was used to enhance code quality with type safety.

### Built with

**UI/Design**:
- [Styled-components](https://styled-components.com/)
- [Phosphor icons](https://phosphoricons.com/)

**State Management**:
- Immer

**Form Handling**:
- [Formik](https://formik.org/)
- [Zod](https://zod.dev/)

**Date Handling**:
- [Date-fns](https://date-fns.org/)

**Routing**:
- React Router DOM

**Core Technologies**:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)

### What I learned

- To use inner to allow to work with immutable state
- Help manage complex state logic: to create, interrupt and mark task as fineshed
- Style components using styled-components: theme, global styles, passing props

### Useful resources

- [Rocketseat - Ignite Course](https://app.rocketseat.com.br/) - The course that helped me get started with this project.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Official documentation for understanding React better.
