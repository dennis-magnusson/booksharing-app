const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  series: String,
  course: String,
  lops16: Boolean,
  publisher: String,
  subject: {
      name: String,
      category: String
  },

});

module.exports = mongoose.model("Book", bookSchema);
