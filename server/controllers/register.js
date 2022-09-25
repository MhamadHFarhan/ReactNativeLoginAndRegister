const User = require("../models/Users");

const createUser = (req, res) => {
  const { username, password, email } = req.body;

  const user = new User({ username, password, email });

  user
    .save()
    .then((user) => {
      res.status(200).json({
        message: "User created successfully",
        user,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error creating user",
        err,
      });
    });
};

module.exports = {
  createUser,
};
