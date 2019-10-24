const router = require("express").Router();
const cartRoutes = require("./shoppingCart");

// Cart routes
router.use("/cart", cartRoutes);

module.exports = router;
