const { verifyPass } = require("../helpers/bcrypt");
const { signToken ,verifyToken} = require("../helpers/jwt");
const { User } = require("../models/index");

class UserController {
  static async createUser(req, res, next) {
    try {
      const { name, email, password, gender } = req.body;
      if (!name || !email || !password || !gender) {
        throw {
          name: "Credential_needed",
          status: 400,
        };
      }
      const newUser = await User.create({
        name,
        email,
        password,
        gender,
      });
      res.status(201).json({
        name: newUser.name,
        email: newUser.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "Credentials_required", status: 400 };
      }

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw { name: "Unauthorized", status: 401 };
      }

      const verifyPassword = verifyPass(password, user.password);
      if (!verifyPassword) {
        throw { name: "Unauthorized", status: 401 };
      }

      const payload = {
        id: user.id,
        email: user.email,
      };
      const access_token = signToken(payload);
      res
        .status(200)
        .json({ access_token, name: user.name, email: user.email });
    } catch (error) {
      next(error);
    }
  }

  static async myProfile(req, res, next) {
    try {
      const profile = await User.findOne({
        where: {
          id: req.user.id,
        },
        attributes : {
          exclude : ['password']
        }
      });


      if (!profile) {
        throw { name: "Not_Found", status: 404 };
      }

      res.status(200).json(profile);
    } catch (error) {
      next(error);
    }
  }

  static async authRequest(req, res, next) {
    try {
      const { access_token } = req.headers;
      const decode = verifyToken(access_token);

      const foundUser = await User.findByPk(decode.id);
      if (!foundUser) {
        throw { name: "Unauthorized_User", status: 401 };
      }

      const auth = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      };

      res.status(200).json(auth)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController;
