const { validateEmail, validatePassword } = require('../helpers/validators');

const registrationController = (req, res) => {
  let { username, email, password } = req.body;

  if (!username) {
    return res.send({ "Errors": "Give Username" });
  } else if (!validateEmail(email)) {
    return res.send({ "Errors": "Give valid Email" });
  } else if (!validatePassword(password)) {
    return res.send({ 
      "Errors": "Password must contain at least 8 characters, one uppercase, one lowercase,special characters and one number"
    });
  } else {
    console.log("Everything is Ok");
    res.send({ "Success": "Registration data is valid" });
  }
};


module.exports = registrationController
