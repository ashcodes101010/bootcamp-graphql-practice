const casual = require('casual')

casual.define('myAddress', () => ({
  id: casual.uuid,
  street: casual.street,
  city: casual.city,
  state: casual.state,
  zip: casual.zip(5),
}))

const addressesData = []

for (let i = 0; i < 20; ++i) {
  addressesData.push(casual.myAddress)
}

module.exports = addressesData
