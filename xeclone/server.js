const express = require('express');
const winston = require('winston');
const helmet = require('helmet')

// Tutorial Citation: https://raddy.dev/blog/nodejs-express-layouts-and-partials/
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

const app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

app.use(helmet())

app.use(express.static('public'))

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.set('layout', './layouts/layout')


app.get('', (req, res) => {
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


app.listen(3000, () => console.log('listening on port 3000.'));


