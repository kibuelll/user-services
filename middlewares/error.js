async function handleErr(err, req, res, next) {
  let message, statusCode;

  switch (err.name) {
    case "SequelizeUniqueConstraintError":
      message = "Your email has already been used";
      statusCode = 400;
      break;
    case "Credential_needed":
      message = "Please input required field";
      statusCode = 400;
      break;
    case "Credentials_required":
      message = "Email and Pasword is required";
      statusCode = 400;
      break;
    case "Unauthorized":
      message = "Invalid Email or Password";
      statusCode = 401;
      break;
    case "Unauthorized_User":
      message = "Please Login First";
      statusCode = 401;
      break;
    case "JsonWebTokenError":
      message = "Invalid Token";
      statusCode = 401;
    case "Not_Found":
      message = "User not found";
      statusCode = 404;
    case "Forbidden":
      message = "You have no access";
      statusCode = 403;
    default:
      message = "Internal Server Error";
      statusCode = 500;
      break;
  }

  res.status(statusCode).json({ message });
}

module.exports = handleErr;
