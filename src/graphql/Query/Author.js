const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Address = require('../../models/Address')

const authors = async () => {
  try {
    const allAuthors = await Author.query()
    return allAuthors
  } catch (err) {
    console.log(err)
    throw new Error('failed to get authors')
  }
}

const authorById = async (obj, { id }, context) => {
  try {
    const author = await Author.query().findById(id)
    return author
  } catch (err) {
    console.log(err)
    throw new Error('failed to get author')
  }
}

const searchAuthors = async (obj, { input }, context) => {
  try {
    const allAuthors = await Author.query().where('lastName', 'like', `%${input.trim()}`)
      .orWhere('firstName', 'like', `${input.trim()}%`)
    return allAuthors
  } catch (err) {
    console.log(err)
    throw new Error('failed to get search')
  }
}

const books = async ({ id }, params, context) => {
  const b = await Book.query().where('authorId', id)
  return b
}

const address = async ({ addressId }, params, context) => {
  const add = await Address.query().findOne('id', addressId)
  return add
}

const resolver = {
  Query: {
    authors,
    authorById,
    searchAuthors,
  },
  Author: {
    books,
    address,
  },
  Publisher: {
    address,
  },
}

module.exports = resolver
