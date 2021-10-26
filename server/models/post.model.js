const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("post", postSchema);
