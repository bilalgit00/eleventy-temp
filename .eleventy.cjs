module.exports = function(eleventyConfig) {
  // Alternative way to specify copying the admin folder
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  
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