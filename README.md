# next-adonis-starter

Welcome to this starter project that uses Next.JS and Adonis.JS v4.1

it demos a basic setup for local development with authentication

Steps to use it: 
* cd into the frontend directory and run 
```
yarn install && yarn dev
```

* cd into the backend directory 
* Create a .env file, here is a template
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

And the run 
```
yarn install && adonis serve --dev
```

