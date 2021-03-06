<img src="./nextadonis.jpg"/>

# Next.js + Adonis.js Starter Template

Welcome to this starter project that uses Next.JS and Adonis.JS v4.1

it demos a basic setup for local development with authentication. 
Each registered user then has a simple dashboard with a protected list of todo's.
This template serves as a way to show how these two amazing platforms can work together in a two-tier way. 
From Next.js you get 
* Server side rendering
* Static site generation
* Typescript Support
* SCSS support
* Routing based on the file-system

From Adonis.JS you get: 
* MVC architecture (we will replace the view for our next frontend)
* Migrations
* Functional and Unit testing
* E2E testing with puppeteer
* Mailer
* Lucid ORM
* and much much more...

## Usage
1. cd into the frontend directory and run 
```
yarn install && yarn dev
```

2. cd into the backend directory and create a .env file, here is a template:
```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development

APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY=

DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis

HASH_DRIVER=bcrypt

```

3 inside the backend directory run 
```
yarn install && adonis migration:run 
```
4. Finally lift the server
```
adonis serve --dev
```


