const now = Date(Date.now())

const index = async () => {
  return { deployed_at: now }
}

module.exports = { index }
