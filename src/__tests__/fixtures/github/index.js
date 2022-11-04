const fs = require('fs')
const path = require('path')

const fixtures = fs
  .readdirSync(__dirname)
  .filter((fname) => fname !== path.basename(__filename))
  .map((fname) => require('./' + fname))

const getPR = (number) => fixtures.find((pr) => pr.context.payload.pull_request.number === number)

module.exports = { fixtures, getPR }
