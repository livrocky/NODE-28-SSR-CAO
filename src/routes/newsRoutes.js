/* eslint-disable one-var */
/* eslint-disable one-var-declaration-per-line */
const express = require('express');
const { getAllArticles } = require('../model/newsModel');

const newsRoutes = express.Router();

// GET /news - render news page = sukurti ir atvaizduoti news.ejs
newsRoutes.get('/news', async (req, res) => {
  console.log('req.body===', req.body);

  let allArticlesArr, feedback;
  try {
    allArticlesArr = await getAllArticles();
  } catch (error) {
    console.log(error);
    feedback = 'Something went wrong';
  }
  const locals = {
    currentPage: 'news',
    title: 'News',
    allArticlesArr,
    feedback,
  };
  res.render('news', locals);
});

module.exports = newsRoutes;
