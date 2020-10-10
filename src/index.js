const express = require('express')
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler')
const router = require('./routes')

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(router)
app.use(errorHandler)

const port = process.env.PORT || 8080
app.listen(port, () =>
  console.log(`API server started on http://localhost:${port}`)
)
