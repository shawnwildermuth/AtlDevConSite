const filters = require("./utils/filters");

module.exports = function (cfg) {

  cfg.addPassthroughCopy("content/assets");

  Object.keys(filters).forEach((key) => {
    cfg.addFilter(key, filters[key]);
  });

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  }; 
}