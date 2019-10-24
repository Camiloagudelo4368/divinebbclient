const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const CartSchema = new Schema({
   
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },

    quantity: {
        type: Number,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    
    couponCode: {
        type: String,
        required: false,
    },
});

// This creates our model from the above schema, using mongoose's model method
const Cart = mongoose.model("Cart", CartSchema);

// Export the Cart model
module.exports = Cart;

