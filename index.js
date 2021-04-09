const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2cca516de7954b6c97352612018e6c42');
const express = require('express')
const app = express()
const port = 3000
let news = {};


// To query sources
// All options are optional
let theFly = newsapi.v2.topHeadlines({
    category: 'health',
    language: 'en',
    country: 'za'
  }).then(res => {
    
      for(let i = 0;i < res.totalResults; i++){
        try {
            console.log(res.articles[i]) 
            //news[i] = res.articles[i];
        } catch (error) {
            continue;
        }         
      }
      return news;
  });

  console.log(theFly);

/* app.get('/', (req, res) => {
  res.send(`${news[0].source}`)
})

 app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})  */

