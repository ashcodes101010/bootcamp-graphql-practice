const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')

const addBook = async (obj, { input }, context) => {
  try {
    const transaction = await Book.transaction(async trx => {
      const books = await Book.query(trx).insert({
        title: input.title,
        language: input.language,
        numPages: input.numPages,
        datePublished: input.datePublished,
        bestseller: input.bestseller,
        authorId: input.authorId,
        publisherId: input.publisherId,
      }).returning('*')
      await Author.query(trx).increment('numBooksPublished', 1).where('id', input.authorId)
      await Publisher.query(trx).increment('numBooksPublished', 1).where('id', input.publisherId)
      return books
    })
    return transaction
  } catch (err) {
    throw new Error('failed to add book')
  }
}

const resolver = {
  Mutation: {
    addBook,
  },
}

module.exports = resolver
