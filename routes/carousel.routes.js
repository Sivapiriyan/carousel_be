const express = require("express");
const router = express.Router();
const carousel = require("../services/carousel.service");

/* All carousel */
router.get("/", async (req, res) => {
  const slides = req.query.slides;
  await carousel
    .getCarousel(slides)
    .then((carousels) => res.json(carousels))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

module.exports = router;
