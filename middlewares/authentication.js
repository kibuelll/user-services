const { verifyToken } = require('../helpers/jwt')
const {User} = require('../models')


async function authentication(req,res,next) {
  try {
    const {access_token} = req.headers
    const decode = verifyToken(access_token)

    const foundUser = await User.findByPk(decode.id)
    if(!foundUser) {
      throw {name : 'Unauthorized',status: 401}
    }

    req.user = {
      id : foundUser.id,
      email : foundUser.email,
      name : foundUser.name
    }
    
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authentication