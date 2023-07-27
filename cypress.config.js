const { defineConfig } = require("cypress", "cypress-xpath");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    watchForFileChanges: false,
    defaultCommandTimeout: 12000,
  },
});
