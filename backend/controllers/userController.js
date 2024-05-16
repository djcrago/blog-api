const User = require('../models/user');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.sign_up = [
  body('first_name', 'First name must not be empty').trim().notEmpty().escape(),
  body('last_name', 'Last name must not be empty').trim().notEmpty().escape(),
  body('username', 'Username must be an email (example@example.com)')
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
    .custom((value, { req }) => {
      return req.body.password_confirm === req.body.password;
    }),
  body('author_passcode', 'Incorrect passcode')
    .trim()
    .custom((value) => value === process.env.AUTHOR_PASSCODE),

  asyncHandler(async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) return next(err);

      const errors = validationResult(req);

      const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: hashedPassword,
      });

      if (!errors.isEmpty()) {
        res.status(400).json({ user, errors: errors.array() });
      } else {
        await user.save();
        res.json({ message: 'user created successfully' });
      }
    });
  }),
];

module.exports.login = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username }).exec();

  if (!user) {
    res.status(400).json({ message: 'Incorrect username' });
  }

  bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
    if (err) return next(err);

    const options = {};
    options.expiresIn = 60 * 60;

    const token = jwt.sign({ user }, process.env.TOKEN_KEY, options);

    if (!isMatch) {
      res.status(400).json({ message: 'Incorrect password' });
    } else {
      res.json({ message: 'user logged in successfully', token });
    }
  });
});
