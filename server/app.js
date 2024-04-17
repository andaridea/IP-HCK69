const express = require('express')
const Controller = require('./controller')
const app = express()
const port = 3000

app.post('/login', Controller.login)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})