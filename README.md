# rundb
The stats we truly care about

This project hosts a full-stack application supporting the tracking of granular running and athletics stats.

## Frontend
* React
* TypeScript
* Vite
* TailwindCSS

## Backend
* Node.js v24
* TypeScript
* Drizzle ORM

## Database

Drizzle PostgreSQL

Setup a local database with Docker:

```bash
docker run --name rundb-postgres -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres
```

Then run the migrations:

```bash
pnpm run migrate
```

Check the database is running:

```bash
docker ps
```

Stop the container:

```bash
docker stop rundb-postgres
```

Start an existing container:

```bash
docker start rundb-postgres
```

Apply changes to DB:

```bash
npx drizzle-kit push
```

Generate migrations:

```bash
npx drizzle-kit generate
```

Apply migrations:

```bash
npx drizzle-kit migrate
```

## Tooling
* pnpm

## Linting
* Oxlint

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
