const express = require('express');
const morgan = require('morgan');
const { PORT } = require('./config');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ msg: 'Server is running' });
});

// Routes

app.all('*', (req, res) => {
  res.status(400).send({ error: 'Page not found' });
});

app.listen(PORT, () => console.log('Listening on port', PORT));
