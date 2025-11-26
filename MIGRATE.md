# Database migration and local dev guide

This project uses Drizzle (`drizzle-kit`) for schema management. The repository includes helper pnpm scripts to make common tasks easy.

Local quick commands (PowerShell)

Copy the example env and update values:

```powershell
cp .env.example .env
# edit .env with real credentials
code .env
```

Run migrations (push local migrations to the database):

```powershell
pnpm run db:push
```

Generate schema artifacts from the database (pulls tables and prints them):

```powershell
pnpm run db:generate
```

Pull remote schema into the `drizzle/` directory:

```powershell
pnpm run db:pull
```

Seeding local DB

We include `scripts/` SQL files. To seed the DB locally you can use `psql` if you have it installed:

```powershell
# Example using DATABASE_URL from .env
$env:DATABASE_URL = (Get-Content .env | Select-String 'DATABASE_URL' ).ToString().Split('=')[1]
psql $env:DATABASE_URL -f ./0000_quick_clint_barton.sql
```

CI notes

- Ensure env variables are provided to the CI runner (DATABASE_URL). Do NOT commit real secrets.
- Install node deps (including `drizzle-orm`, `pg`, and `dotenv`) before running drizzle commands in CI.
