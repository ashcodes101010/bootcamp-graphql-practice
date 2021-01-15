const User = require('../../models/User')

const { comparePassword, createToken } = require('../../lib/auth')

const login = async (obj, { email, password }) => {
  const user = await User.query().findOne('email', email)
  if (!user) {
    throw new Error('no account at this email')
  }
  const validPassword = await comparePassword(password, user.password)
  if (!validPassword) {
    throw new Error('password did not match')
  }
  // successfully authenticated
  const payload = {
    id: user.id,
  }
  const token = createToken(payload)
  return { user, token }
}

const resolver = {
  Mutation: {
    login,
  },
}

module.exports = resolver
