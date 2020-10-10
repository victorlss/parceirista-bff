const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const router = require('./routes')

const app = express()
app.use(router)
app.use(errorHandler)

const port = process.env.PORT || 8080
app.listen(port, () =>
  console.log(`API server started on http://localhost:${port}`)
)
