let carousels = require("../data/carousels.json");

function getCarousel(slides) {
  return new Promise((resolve, reject) => {
    if (carousels.length === 0) {
      reject({
        message: "no carousel available",
        status: 202,
      });
    }

    resolve(carousels.slice(0, slides));
  });
}

module.exports = {
  getCarousel,
};
