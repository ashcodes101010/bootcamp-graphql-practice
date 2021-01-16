const Author = require('../../models/Author')
const Address = require('../../models/Address')

const addAuthor = async (obj, { input }) => {
  try {
    const transaction = await Address.transaction(async trx => {
      let addId = null
      if (input.address) {
        const add = await Address.query(trx).insert({
          street: input.address.street,
          city: input.address.city,
          state: input.address.state,
          zip: input.address.zip,
        }).returning('*')
        addId = add.id
      }
      const author = await Author.query(trx).insert({
        firstName: input.firstName,
        lastName: input.lastName,
        age: input.age,
        email: input.email,
        addressId: addId,
      }).returning('*')
      return author
    })
    return transaction
  } catch (err) {
    throw new Error('failed to add author')
  }
}

const resolver = {
  Mutation: {
    addAuthor,
  },
}

module.exports = resolver
