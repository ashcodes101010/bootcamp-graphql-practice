const Publisher = require('../../models/Publisher')

const publishers = async () => {
    try {
      const allPub = await Publisher.query()
      return allPub
    } catch (err) {
      console.log(err)
      throw new Error('failed to get publishers')
    }
}

const resolver = {
    Query: {
      publishers,
    },
  }
  
module.exports = resolver