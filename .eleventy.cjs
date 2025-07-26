module.exports = function(eleventyConfig) {
  // Explicitly copy each admin file
  eleventyConfig.addPassthroughCopy({"admin/config.yml": "admin/config.yml"});
  eleventyConfig.addPassthroughCopy({"admin/index.html": "admin/index.html"});

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