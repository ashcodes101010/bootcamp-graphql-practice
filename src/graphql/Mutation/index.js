const merge = require('lodash.merge')
const Author = require('./Author')
const Book = require('./Book')

const resolvers = [Author, Book]

module.exports = merge(...resolvers)
