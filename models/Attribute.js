
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new AttributeSchema object
var AttributeSchema = new Schema({

  name: String,
  active: Boolean,
  colors: [{
    type: Schema.Types.ObjectId,
    ref: "Color"
  }]
})

// This creates our model from the above schema, using mongoose's model method
mongoose.set('useFindAndModify', false);

var Attribute = mongoose.model("Attribute", AttributeSchema);
// Export the Attribute model
module.exports = Attribute;
