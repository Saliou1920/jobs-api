const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Invalid token");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.userId);
    if (!user) {
      throw new UnauthenticatedError("Invalid token");
    }
    req.user = { userId: payload.userId, name: user.name };
    next();
  } catch (err) {
    throw new UnauthenticatedError("Invalid token");
  }
};

module.exports = auth;
