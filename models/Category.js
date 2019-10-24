
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const CategorySchema = new Schema({
    // `title` is required and of type String
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true,
    }
});

// This creates our model from the above schema, using mongoose's model method
const Category = mongoose.model("Categories", CategorySchema);

// Export the Category model
module.exports = Category;

