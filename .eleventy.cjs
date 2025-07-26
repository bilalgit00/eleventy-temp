module.exports = function(eleventyConfig) {
  // Copy admin folder
  eleventyConfig.addPassthroughCopy("admin");

  // Copy other assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};