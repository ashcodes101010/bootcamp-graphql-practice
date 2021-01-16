const merge = require('lodash.merge')
const Author = require('./Author')
const Book = require('./Book')
const Auth = require('./Auth')

const resolvers = [Author, Book, Auth]

module.exports = merge(...resolvers)
