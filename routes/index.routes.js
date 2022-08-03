const express = require("express");
const router = express.Router();

router.use("/api/carousel", require("./carousel.routes"));

module.exports = router;
