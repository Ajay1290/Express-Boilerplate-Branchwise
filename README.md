### Express-Boilerplate-Branchwise

# basic-1

[basic-0](https://github.com/Ajay1290/Express-Boilerplate-Branchwise/tree/basic-0) Express Implementation with Linting, Formating & Testing

## Tech Content

| Tech                             | Description          |
| -------------------------------- | -------------------- |
| [EsLint](https://eslint.org/)    | Static code analyzer |
| [Prettier](https://prettier.io/) | Code formatter       |
| [Jest](https://jestjs.io/)       | JS testing framework |

## Scripts

```js
"scripts": {
    "start": "set NODE_ENV=production && node ./bin/www",
    "dev": "set NODE_ENV=development && nodemon ./bin/www",
    "test": "jest --coverage",
    "test:watch": "jest --watchAll",
    "format": "prettier -c .",
    "format:fix": "prettier -w .",
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
},
```

- **`yarn start`** will start the production server
- **`yarn dev`** will start the development server
- **`yarn test`** will test the code
- **`yarn test:watch`** will test code and watch changes
- **`yarn format`** will scan code for all format errors
- **`yarn format:fix`** will fix all format errors
- **`yarn lint`** will scan code for lint errors
- **`yarn lint:fix`** will fix all lint errors

## Dependencies

```js
"compression": "^1.7.4",
"cookie-parser": "~1.4.4",
"debug": "~2.6.9",
"dotenv": "^16.0.2",
"express": "~4.16.1",
"helmet": "^6.0.0",
"http-errors": "^2.0.0",
"morgan": "~1.9.1"
// dev
"eslint": "^8.23.1",
"eslint-config-airbnb-base": "^15.0.0",
"eslint-config-prettier": "^8.5.0",
"eslint-plugin-import": "^2.26.0",
"eslint-plugin-prettier": "^4.2.1",
"jest": "^29.0.3",
"nodemon": "^2.0.20",
"prettier": "^2.7.1",
"supertest": "^6.2.4"
```

## TODO

1. Fix Unit Tests
2. Add proper Middlewares

## Copyright and License

**OPENSOURCE** By [Ajay Patil](https://github.com/Ajay1290).
Code released under the [MIT license](LICENSE).
