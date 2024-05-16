const User = require('../models/user');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.SECRETORKEY;

module.exports = new JwtStrategy(options, async (jwt_payload, done) => {
  const user = await User.findOne({ username: req.body.username }).exec();

  if (jwt_payload.username === user.username) {
    return done(null, true);
  }
  return done(null, false);
});
