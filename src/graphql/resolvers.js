const merge = require('lodash.merge')
const mutations = require('./Mutation')
const queries = require('./Query')
const dates = require('../lib/scalars')

module.exports = merge(mutations, queries, dates)
