### Express-Boilerplate-Branchwise 
# basic-0

Vanila Express Implementation with Compression, Helmet, Logger


## Tech Content

| Tech | Description |
|-----|----|
|[Express](http://expressjs.com/)| Minimalist Web Framework for Node |
|[Compression](https://github.com/expressjs/compression)| Compression Middleware |
|[Helemt](https://helmetjs.github.io/)| Secure apps by setting various HTTP headers |
|[Morgan](https://github.com/expressjs/morgan)| Request Logger Middleware |
  
  
## Scripts

```js
"scripts": {
    "start": "set NODE_ENV=production && node ./bin/www",
    "dev": "set NODE_ENV=development && nodemon ./bin/www"
}
```

- **`yarn start`** | will start the production server
- **`yarn dev`**   | will start the development server


## Dependencies
```js
"compression": "^1.7.4",
"cookie-parser": "~1.4.4",
"debug": "~2.6.9",
"dotenv": "^16.0.2",
"express": "~4.16.1",
"helmet": "^6.0.0",
"morgan": "~1.9.1",
// dev
"nodemon": "^2.0.19"
```


## Copyright and License
**OPENSOURCE** By [Ajay Patil](https://github.com/Ajay1290).
Code released under the [MIT license](LICENSE).
