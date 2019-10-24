var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ImageSchema object
var ImageSchema = new Schema({
  link: String,
  active: Boolean,
});

// This creates our model from the above schema, using mongoose's model method
mongoose.set('useFindAndModify', false);
var Image = mongoose.model("Image", ImageSchema);
// Export the Image model
module.exports = Image;
