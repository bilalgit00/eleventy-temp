module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("htmlBaseUrl", function(value) {
        return value ? new URL(value).origin : "";
    });
};
