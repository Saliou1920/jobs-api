const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((error) => error.message);
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: messages });
  }

  if (err.name === "CastError") {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Invalid ID" });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Internal server error" });
};

module.exports = errorHandlerMiddleware;
