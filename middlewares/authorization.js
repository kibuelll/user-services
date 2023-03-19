const {User} = require('../models')

async function authorization(req,res,next) {
  try {
    const userAuthorized = await User.findByPk(req.user.id)

    if(userAuthorized.name !== req.user.name) {
      throw {name : "Forbidden",status:403}
    }

    next()
  } catch (error) {
    next(error)
  }
}


module.exports = authorization