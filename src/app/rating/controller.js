const ratingSchema = require('./db.model')

const index = async () => {
  return { message: 'Services' }
}

const getRatings = async (userId) => {
  const ratings = await ratingSchema.find({ $or: [{ businessId: userId }, { professionalId: userId }] })
  return { ratings }
}

const createRating = async (userId, rating) => {
  const contracts = await ratingSchema.create(rating)
  return { contracts }
}

const deleteRating = async (ratingId) => {
  await ratingSchema.deleteMany({ _id: ratingId })
}

module.exports = { index, getRatings, createRating, deleteRating }
