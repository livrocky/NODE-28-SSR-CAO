/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const express = require('express');
const path = require('path');
const { PORT } = require('./config');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const staticDir = path.join(__dirname, 'assets');
app.use(express.static(staticDir));

app.get('/', function (req, res) {
  // get info from db
  const tech = ['Html', 'Css', 'Js'];
  const data = {
    tech,
    title: 'Home page',
  };
  res.render('index', data);
});

// // Middleware
// app.use(morgan('dev'));
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send({ msg: 'Server is running' });
// });

// // Routes

// app.all('*', (req, res) => {
//   res.status(400).send({ error: 'Page not found' });
// });

app.listen(PORT, () => console.log('Listening on port', PORT));
