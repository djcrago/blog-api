const User = require('../models/user');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.TOKEN_KEY;

module.exports = new JwtStrategy(options, async (jwt_payload, done) => {
  const user = await User.findOne({ _id: jwt_payload.user._id }).exec();

  if (user) {
    return done(null, true);
  }
  return done(null, false);
});
