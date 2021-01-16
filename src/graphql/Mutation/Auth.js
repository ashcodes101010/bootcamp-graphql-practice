const User = require('../../models/User')

const { comparePassword, createToken, hashPassword } = require('../../lib/auth')

const login = async (obj, { email, password }) => {
  try {
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
  } catch (err) {
    throw new Error('unable to log in')
  }
}

const register = async (obj, { input: { email: userEmail, password } }) => {
  try {
    const hashedPass = await hashPassword(password)
    const user = await User.query().insert({
      email: userEmail,
      password: hashedPass,
    }).returning('*')
    const payload = {
      id: user.id,
    }
    const token = createToken(payload)
    return { user, token }
  } catch (err) {
    throw new Error('unable to register')
  }
}

const resolver = {
  Mutation: {
    login,
    register,
  },
}

module.exports = resolver
