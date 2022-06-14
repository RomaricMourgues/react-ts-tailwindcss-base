const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@config": path.resolve(__dirname, "src/config"),
      "@atoms": path.resolve(__dirname, "src/atoms"),
      "@components": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/views"),
      "@features": path.resolve(__dirname, "src/features"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
};
