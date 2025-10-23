# Coins R Us

A privacy-focused Next.js application for managing a coin collection, featuring:

- Inventory and coin adding pages
- User data managed via a simple `json-server` backend

---

## Project Info

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

CSS is styled using [Styled Components](https://styled-components.com).

The [Radix UI](https://www.radix-ui.com/) component framework is used for the UI components.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## User Data Backend: json-server

For local development, user data is stored as plain text using [json-server](https://github.com/typicode/json-server).

Open a new terminal window and run this command from the `coins-r-us` directory:

```bash
npx json-server --watch data/database.json --port 3001
```

If `json-server` is not installed, you will be prompted to install it.

- The API will be served at [http://localhost:3001](http://localhost:3001)
- User data will be saved in `data/database.json`

