const userModel = require("../users/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const login = async (email, password) => {
  const user = await userModel.findOne({
    email,
  });
  if (!user) throw new Error("user Doesnot Exixt");
  if (user.isActive)
    throw new Error("user is not active.please contact admin.");
  if (!user.isEmailVerified)
    throw new Error("Email not varified,please contact admin.");
  const isValidPw = await bcrypt.compare(password, user?.password);
  if (!isValidPw) throw new Error("username or password is in valid");
  return true;
};

const create = async (payload) => {
  const { password, ...rest } = payload;
  rest.password = await bcrypt.hash(myPlaintextPassword, saltRounds);
  return Model.create(rest);
};

module.exports = { create, login };
