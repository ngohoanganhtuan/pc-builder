### OVERVIEW

- This document contains the information of practice React theming with Boostrap 5 utilities.

### TECHNICAL

- [React (17.0.2)](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [SCSS Bootstrap](https://getbootstrap.com/docs/5.0/customize/sass/) - Utilize our source Sass files to take advantage of variables, maps, mixins, and functions to help you build faster and customize your project.
- [Vite](https://vitejs.dev/guide/) - a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts.
- [Storybook](https://storybook.js.org/) - an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.
- [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.
- [React Router 6](https://reactrouter.com/docs/en/v6/getting-started/overview) - React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

### STEP TO STEP GUIDE TO INSTALL AND RUN

#### How to start app

- Download source from repository: 
```bash
$ git clone git@gitlab.asoft-python.com:huy.vuong/react-training.git
```

- Go to root folder
```bash
$ cd react-training
```

- Checkout to target branch
```
$ git checkout practice-two
```
- Go to practice folder
```bash
$ cd practice-two
```

- Install packages
```bash
$ pnpm install
```

- Run app on localhost
```bash
$ pnpm dev
```

- Open browser and navigate to `http://localhost:3000/`

#### Optional

##### Run Storybook 

```bash
$ pnpm storybook
```
- Open browser and navigate to `http://localhost:6006/`

##### Run Test 

```bash
$ pnpm test
```

