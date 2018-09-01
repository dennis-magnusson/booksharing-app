const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
  price: Number,
  condition: Number,
  description: String,
  // seller: {
  //   name: String,
  //   school: String
  // },
  creation_date: Date
});

module.exports = mongoose.model("Listing", listingSchema);
