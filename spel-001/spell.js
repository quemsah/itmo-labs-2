const express = require('express')
const russian = require('./russian')

const isNumber = n => !isNaN(parseFloat(n)) && !isNaN(n - 0);
const isInInterval = n => (n >= 1 && n <= 999999);

const app = express()

app.get('/', (req, res) =>
  res.send('Привет, нужно /spell/:n')
)

app.get('/spell/:num', (req, res) => {
  let value = parseInt(req.params.num);
  if (isNumber(value)) {
    if (isInInterval(value)) {
      res.send(russian(value))
    } else {
      res.status(500).send('Выход из диапазона!')
    }
  } else {
    res.status(500).send('Введено не число!')
  }
})

app.listen(3000, () =>
  console.log('Запущено...')
)