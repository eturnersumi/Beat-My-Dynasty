const router = require("express").Router();
const teamRoutes = require("./teams");

// team routes
router.use("/teams", teamRoutes);

module.exports = router;
