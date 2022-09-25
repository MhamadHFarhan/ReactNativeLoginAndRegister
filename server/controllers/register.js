const User = require("../modules/Users");

const createUser = (req, res, next) => {
  const { username, password, email } = req.body;

  const user = new User({ username, password, email });

  user
    .save()
    .then(() => {
      next();
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
