# React for Professional Web Developers - Code

Free companion code for the book **React for Professional Web Developers: From JavaScript Basics to a Complete E-Commerce App with Redux Toolkit** by Ajao Hazzan ([Mavointech](https://www.mavointech.fi)).

See the finished capstone shop running live: **https://nordtech-store.web.app**

## What is in this repository

| Folder | Used in | What it is |
| --- | --- | --- |
| `js-examples/` | Chapters 2 and 3 | Small JavaScript programs you run with Node.js |
| `react-examples/` | Chapters 4 to 9 | One folder per chapter, with a runnable example browser and tests |
| `projects/01-counter` | Chapter 10 | Counter with a reducer and undo |
| `projects/02-todo` | Chapter 10 | Todo list that saves itself in localStorage |
| `projects/03-users-api` | Chapter 10 | Users from an API, as cards and a table |
| `projects/04-auth` | Chapter 10 | Register, log in and protected pages |
| `projects/05-mini-shop` | Chapter 11 | Mini shop with Redux Toolkit and Material UI |

The capstone, the **NordTech Store** (Chapters 12 and 13), is in a separate private repository. How to get it is explained in the book.

## Run the projects

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install            # once, in this folder
npm run dev:01         # counter
npm run dev:02         # todo list
npm run dev:03         # users from an API
npm run dev:04         # authentication
npm run dev:05         # mini shop
npm test               # run the project tests
```

The chapter examples have their own folder:

```bash
cd react-examples
npm install
npm run dev            # pick a chapter from the menu at the top
npm test
```

JavaScript examples run with Node, for example `node js-examples/01-variables.js`.

## Notes

- The mini shop uses sample pictures loaded from the internet (picsum.photos). If you are offline, product pictures will not show.
- The login in project 4 is a **learning demo**. Passwords live in the browser. Never use this approach in a real application.

## Licence

MIT. Free to use for learning and in your own projects. See `LICENSE`.
