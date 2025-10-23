# Coins R Us

A privacy-focused Next.js application for managing a coin collection, featuring:

- Inventory and coin adding pages
- User data managed via a simple `json-server` backend

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## User Data Backend: json-server

For local development, user data is stored as plain text using [json-server](https://github.com/typicode/json-server).

### Install json-server (globally or as a devDependency)

```bash
npm install -g json-server
```

### Start json-server

Run this command from the `coins-r-us-web` directory:

```bash
npx json-server --watch data/database.json --port 3001
```

- The API will be served at [http://localhost:3001](http://localhost:3001)
- User data will be saved in `data/database.json`

