const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('pagina inicial')
})

app.get('/sobre', (req, res) => {
  res.send('pagina sobre')
})

app.get('/versao', (req, res) => {
  res.send('v1.0.0')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
