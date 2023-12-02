const express = require('express');
const serveIndex = require('serve-index');
const helmet = require('helmet')
const winston = require('winston')
const path = require('path');


const app = express();

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      "script-src": ["'self'"],
    },
  },
}),)



const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: __dirname +'combined.log',
    }),],
});


app.use((req, res, next) => {
  logger.info('Time: '+ Date.now());
  next();
});


app.use('/', express.static('public'));
app.use('/', serveIndex('public'));

app.use('/info', express.static('public/info'));
app.use('/info', serveIndex('public/info'));

app.use('/cattax', express.static('public/cattax'));
app.use('/cattax', serveIndex('public/cattax'));



app.all('*', (req, res) => {
    logger.warn("404 URL: "+req.url)
    res.sendFile(path.join(__dirname, 'public','/404.html'));
  });



app.listen(3000, () => logger.info('listening on port 3000.'));


