const User = require("../modules/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          message: "User not found",
        });
      }

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({
            message: "Invalid credentials",
          });
        }

        jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;

            return res.status(200).json({
              token,
              user: {
                id: user._id,
                username: user.username,
                email: user.email,
              },
            });
          }
        );
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error logging in user",
        err,
      });
    });
};

module.exports = login;