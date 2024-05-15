const User = require('../models/user');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

module.exports.login = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username }).exec();

  const passwordsMatch = user.password === req.body.password;

  if (!passwordsMatch) {
    res.status(400).json({ message: 'incorrect password' });
  } else {
    res.json({ message: 'user logged in successfully' });
  }
});

module.exports.sign_up = [
  body('first_name', 'First name must not be empty').trim().notEmpty().escape(),
  body('last_name', 'Last name must not be empty').trim().notEmpty().escape(),
  body('username', 'Username must be an email')
    .trim()
    .custom(async (value) => {
      const userExists = await User.findOne({ username: value }).exec();
      if (userExists) {
        throw new Error('Email already in use');
      }
    })
    .isLength({ min: 4 })
    .withMessage('Username must be at least 4 characters')
    .escape()
    .isEmail(),
  body('password', 'Password must be at least 6 characters')
    .trim()
    .isLength({ min: 6 })
    .escape(),
  body('password_confirm', 'Passwords do not match')
    .trim()
    .custom(({ req }) => {
      return req.body.password_confirm === req.body.password;
    }),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: req.body.password,
    });

    if (!errors.isEmpty()) {
      res.status(400).json({ user, errors: errors.array() });
    } else {
      await user.save();
      res.json({ message: 'user created successfully' });
    }
  }),
];
