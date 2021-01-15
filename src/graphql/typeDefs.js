const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    authors: [Author!]!
    allBooks: [Book!]!
    publishers: [Publisher!]!
    authorById(id: ID!): Author!
    bookById(id: ID!): Book!
    searchAuthors(input: String!): [Author!]!
  }
  type Mutation {
    addAuthor(input: authorInput!): Author!
    addBook(input: bookInput!): Book!
  }
  input addressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }
  input authorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    address: addressInput
  }
  input bookInput {
    title: String!
    language: String
    numPages: Int
    datePublished: Date
    bestseller: Boolean 
    authorId: ID!
    publisherId: ID!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    address: Address
    numBooksPublished: Int!
    books: [Book!]!
    createdAt: String!
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
    createdAt: String!
  }
  type Book {
    id: ID!
    title: String!
    language: String
    numPages: Int
    datePublished: Date
    bestseller: Boolean 
    author: Author!
    publisher: Publisher!
    createdAt: String!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
    createdAt: String!
  }
  scalar Date
`
