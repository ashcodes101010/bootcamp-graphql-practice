const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    authors: [Author!]!
    books: [Book!]!
    publishers: [Publisher!]!
    authorById(id: ID!): Author!
    bookById(id: ID!): Book!
  }
  type Mutation {
    addAuthor(input: addAuthorInput): Author!
    addBook(input: addBookInput): Book!
    addPublisher(input: addPublisherInput): Publisher!
  }
  input addAuthorInput {
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    address: Address!
  }
  input addPublisherInput {
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }
  input addBookInput {
    title: String!
    language: String
    numPages: Int
    datePublished: Date!
    bestseller: Boolean! 
    author: Author!
    publisher: Publisher!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    address: Address!
    books: [Book!]!
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String
    zip: String
  }
  type Book {
    id: ID!
    title: String!
    language: String
    numPages: Int
    datePublished: String!
    bestseller: Boolean! 
    author: Author!
    publisher: Publisher!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }
  scalar Date
`
