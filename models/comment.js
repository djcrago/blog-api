const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: { type: String, required: true },
  date: { type: Date, required: true },
  post: { type: mongoose.Types.ObjectId, ref: 'Post', required: true },
});

CommentSchema.virtual('url').get(function () {
  return `/comments/${this._id}`;
});

CommentSchema.virtual('date_formatted').get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATETIME_MED);
});

module.exports = mongoose.model('Comment', CommentSchema);
