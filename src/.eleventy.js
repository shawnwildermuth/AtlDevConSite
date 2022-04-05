module.exports = function (cfg) {

  cfg.addPassthroughCopy("content/assets");


  return {
    dir: {
      input: "content",
      output: "_site"
    }
  };
}