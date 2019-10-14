const express = require('express');
const Parser = require('rss-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('hi!'))
app.post('/yo', async (req, res) => {
  let arr = [];
  let n = +req.body.param;
  const { items } = await new Parser().parseURL('https://nodejs.org/en/feed/blog.xml');
  items.slice(0, n).map(({title, link}) => ({title, link})).forEach(item => arr.push(item));
  res.send(arr);
})

app.listen(3000, () => console.log('Запущено...'));