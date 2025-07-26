module.exports = function(eleventyConfig) {
  // Define the htmlBaseUrl filter
  eleventyConfig.addFilter("htmlBaseUrl", function(value) {
    return value ? new URL(value).origin : "";
  });
};
