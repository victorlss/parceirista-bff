const handle = async (response, next, action) => {
  try {
    response.send(await action())
  } catch (e) {
    next(e)
  }
}

module.exports = { handle }
