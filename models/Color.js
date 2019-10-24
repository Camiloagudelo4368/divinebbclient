var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ColorSchema object
var ColorSchema = new Schema({
  color: String,
  active: Boolean,
});

// This creates our model from the above schema, using mongoose's model method
mongoose.set('useFindAndModify', false);
var Color = mongoose.model("Color", ColorSchema);
// Export the Color model
module.exports = Color;
