const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JasminSchema = new Schema({
  Breed: { type: String },
  Picture: { type: String },
  ShortDescription: { type: String },
  Characteristics: { type: String },
  Origin: { type: String },
  Nature: { type: String },
  Health: { type: String },
  Movement: { type: String },
  Nutrition: { type: String },
  Maintenance: { type: String },
  Children: { type: String },
});

const comments = new Schema({
  commentator: { type: String },
  added: { type: Date },
  comment: { type: String },
});

JasminSchema.add({
  comments: [comments],
});
const Jasmin = mongoose.model("jasmins", JasminSchema);

module.exports = {
  Jasmin,
};
