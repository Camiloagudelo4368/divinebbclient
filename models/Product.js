const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ProductSchema = new Schema({
    // `title` is required and of type String
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    customizable: {
        type: Boolean,
    },

    attributes: [{
        type: Schema.Types.ObjectId,
        ref: "Attribute"
    }],
    // `Image` is an object that stores a Image id
    // The ref property links the ObjectId to the Image model
    // This allows us to populate the Product with an associated Image
    imgs: [{
        type: Schema.Types.ObjectId,
        ref: "Image"
    }]
});

// This creates our model from the above schema, using mongoose's model method
const Product = mongoose.model("Products", ProductSchema);

// Export the Product model
module.exports = Product;

