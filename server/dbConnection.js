const mongoose = require("mongoose");
const { Todos } = require("./models/TodoSchema");
const { Users } = require("./models/UsersSchema");

// Connecting to database
mongoose.connect(
  "mongodb+srv://test:test@cluster0.5y6pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const Schema = mongoose.Schema;

const JasminSchema = new Schema({
  Breed: { type: String },
});

const Jasmin = mongoose.model("jasmins", JasminSchema);

module.exports = {
  Jasmin,
  Todos,
  Users,
};
