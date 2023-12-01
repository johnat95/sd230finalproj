const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

const app = express();

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






app.listen(3000, () => console.log('listening on port 3000.'));


