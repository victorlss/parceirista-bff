const sendErrorDevelopment = (err, res) => {
  res.status(err.statusCode).send({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  })
}

const sendErrorProd = (err, res) => {
  res.status(err.statusCode).send({
    status: err.status,
    message: err.message
  })
}

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  if (process.env.NODE_ENV === 'development') {
    sendErrorDevelopment(err, res)
  } else {
    sendErrorProd(err, res)
  }
}
