import axios from "axios";

export default {
  
  // Gets the catt with the given user id
  getCart: function(id) {
    return axios.get("/api/cart/" + id);
  },
  // Deletes the cart register with the given id
  deleteCartItem: function(id) {
    return axios.delete("/api/cart/" + id);
  },
  // Saves a book to the database
  saveCart: function(cartData) {
    return axios.post("/api/cart", cartData);
  }
};
