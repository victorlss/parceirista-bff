const index = async () => {
  return { message: 'Services' }
}

const getServices = async (type) => {
  const payload = [
    {
      serviceId: 0,
      name: 'Criar Logomarca'
    }
  ]
  return { payload }
}

module.exports = { index, getServices }
