const express = require('express');
const winston = require('winston');
const helmet = require('helmet')

// Tutorial Citation: https://raddy.dev/blog/nodejs-express-layouts-and-partials/
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const PORT = 3000

const app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: __dirname +'-server.log',
    }),],
});


app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": ["'self'", "nonce-1"],
        "script-src-attr": "'unsafe-inline'"
      },
    },
  }),
);


app.use(express.static(__dirname + "/public"));


app.set('view engine', 'ejs')
app.use(expressLayouts)

app.set('layout', './layouts/layout')

app.get('/', (req, res) => {

  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/currencyConverter', (req, res) => {
  res.render('currencyConverter')
})

app.all('*', (req, res) => {
  logger.warn("404:"+req.url)
    res.render('404')
  });


app.listen(PORT, () => logger.info('listening on port '+ PORT));


