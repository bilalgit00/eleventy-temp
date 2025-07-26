module.exports = function(eleventyConfig) {
  console.log("Eleventy config loaded!");  // To confirm the config is being loaded

  // Define the htmlBaseUrl filter
  eleventyConfig.addFilter("htmlBaseUrl", function(value) {
    try {
      return value ? new URL(value).origin : "";
    } catch (e) {
      return ""; // Return empty string if URL parsing fails
    }
  });
};
