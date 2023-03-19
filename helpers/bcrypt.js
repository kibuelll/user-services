const bcrypt = require('bcryptjs')

module.exports = {
  hashPass(password) {
    return bcrypt.hashSync(password,8)
  },

  verifyPass(password,hash) {
    return bcrypt.compareSync(password,hash)
  }
}