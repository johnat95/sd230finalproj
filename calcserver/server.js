const express = require('express');
const serveIndex = require('serve-index');
const path = require('path')

const app = express();


app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});


app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method);
  next();
});

app.use('/', express.static('public'));
app.use('/', serveIndex('public'));

app.use('/info', express.static('public/info'));
app.use('/info', serveIndex('public/info'));

app.all('*', express.static('public'));
app.all('*', serveIndex('public/error'));

app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','/404.html'));
  });



app.listen(3000, () => console.log('Example app is listening on port 3000.'));


