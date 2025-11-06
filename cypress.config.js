const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000, // 
    defaultCommandTimeout: 10000, 
  },
});
