/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const express = require('express');
const path = require('path');
const { PORT } = require('./config');
const newsRoutes = require('./routes/newsRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// middleware
// atkoduoti req.body
app.use(express.urlencoded({ extended: false }));

const staticDir = path.join(__dirname, 'assets');
app.use(express.static(staticDir));

app.get('/', function (req, res) {
  res.render('index', { page: 'Home', menuId: 'home' });
});

// app.get('/news', function (req, res) {
//   res.render('news', { page: 'News', menuId: 'news' });
// });

app.use('/', newsRoutes);

app.listen(PORT, () => console.log('Listening on port', PORT));
