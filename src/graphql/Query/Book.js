const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')

const allBooks = async () => {
  try {
    const books = await Book.query()
    return books
  } catch (err) {
    console.log(err)
    throw new Error('failed to get books')
  }
}

const bookById = async (obj, { id }, context) => {
  try {
    const book = await Book.query().findById(id)
    return book
  } catch (err) {
    console.log(err)
    throw new Error('failed to get book')
  }
}

const author = async ({ authorId }, params, context) => {
  const auth = await Author.query().findOne('id', authorId)
  return auth 
}

const publisher = async ({ publisherId }, params, context) => {
    const pub = await Publisher.query().findOne('id', publisherId)
    return pub 
  }

const resolver = {
  Query: {
    allBooks,
    bookById,
  },
  Book: {
    author,
    publisher,
  },
}

module.exports = resolver