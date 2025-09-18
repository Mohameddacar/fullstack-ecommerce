const {
  validateEmail,
  validatePassword
} = require("../helpers/validators");
const emailVerification = require("../helpers/emailVerification");
const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const registrationController = async (req, res) => {
  let { username, email, password } = req.body;
  console.log(req.body);

  if (!username) {
    return res.send({ errors: "Give Username" });
  } else if (!validateEmail(email)) {
    return res.send({ errors: "Give valid Email" });
  } else if (!validatePassword(password)) {
    return res.send({
      errors:
        "Password must contain at least 8 characters, one uppercase, one lowercase,special characters and one number",
    });
  } else {
    let existUser = await userSchema.find({ email: email });

    if (existUser.length > 0) {
      return res.send({ errors: `${existUser[0].email} Already in Use` });
    } else {
      bcrypt.hash(password, 10, function (err, hash) {
        let data = new userSchema({
          username: username,
          email: email,
          password: hash,
        });
        data.save();
        emailVerification(email)
          .then(() => {
            res.send({ success: "Registration Successful" });
          })
          .catch((err) => {
            if (err.code === 11000) {
              res.send({ errors: "Email already exists" });
            } else {
              res.send({ Errors: "An error occurred during registration" });
            }
          });
      });
    }
  }
};

module.exports = registrationController;
