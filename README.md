# cybersecportfolio

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/kaibancud-2905s-projects/v0-cybersecportfolio-vq)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/iQcOJlpr4uN)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/kaibancud-2905s-projects/v0-cybersecportfolio-vq](https://vercel.com/kaibancud-2905s-projects/v0-cybersecportfolio-vq)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/iQcOJlpr4uN](https://v0.app/chat/projects/iQcOJlpr4uN)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Database

This project uses Drizzle (`drizzle-kit`) for schema management. Useful helper scripts are available in `package.json`:

- `pnpm run db:push` — push local migrations to the database
- `pnpm run db:generate` — generate/pull schema info from the database
- `pnpm run db:pull` — pull remote schema files into the `drizzle/` folder
- `pnpm run db:seed` — run SQL seed files (requires `psql` CLI)

Before running any DB commands, copy `.env.example` to `.env` and fill in `DATABASE_URL` or `PG*` variables.
