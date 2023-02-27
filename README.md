# NestJS beckend boilerplate

## Stack
- NestJS
- PostgreSQL
- ExpressJS
- Swagger

## Getting started

```bash
# 1. Clone the repository or click on "Use this template" button.
git clone https://********.git my-new-project

# 2. Enter your newly-cloned folder.
cd my-new-project

# 3. Install dependencies. (Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install)
yarn

# 4 Copy the configuration sample and configure environment variables 

cp .env.sample .env

```bash
PORT=3000
TRANSPORT_PORT=8080
JWT_SECRET_KEY=rxPhglGJWPlOW596
JWT_EXPIRATION_TIME=3600
FALLBACK_LANGUAGE=en
NATS_ENABLED=false
ENABLE_ORMLOGS=true
ENABLE_DOCUMENTATION=true
# Database envioroment variables
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=databasename
```
# 4. Run development server and open http://localhost:3000
yarn start:dev

# 5. Read the documentation linked below for "Setup and development".
```

## Features

<dl>
  <dt><b>Quick scaffolding</b></dt>
  <dd>Create modules, services, controller - right from the CLI!</dd>

  <dt><b>Instant feedback</b></dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes are reflected instantaneously.</dd>

  <dt><b>JWT Authentication</b></dt>
  <dd>Installed and configured JWT authentication.</dd>

  <dt><b>Next generation Typescript</b></dt>
  <dd>Always up to date typescript version.</dd>

  <dt><b>Industry-standard routing</b></dt>
  <dd>It's natural to want to add pages (e.g. /about`) to your application, and routing makes this possible.</dd>

  <dt><b>Environment Configuration</b></dt>
  <dd>development, staging and production environment configurations</dd>

  <dt><b>Swagger Api Documentation</b></dt>
  <dd>Already integrated API documentation. To see all available endpoints visit http://localhost:3000/documentation</dd>

  <dt><b>Linter</b></dt>  
  <dd>eslint + prettier = ❤️</dd>
</dl>

## Documentation

This project includes a `docs` folder with more details on:

1.  [Setup and development](/docs/development.html#first-time-setup)
1.  [Architecture](/docs/architecture.md)
