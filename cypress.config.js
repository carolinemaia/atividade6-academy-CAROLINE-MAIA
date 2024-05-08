// const { defineConfig } = require("cypress");
// const cucumber = require("cypress-cucumber-preprocessor").default;

// module.exports = defineConfig({
//   e2e: {
//     baseURL: "https://rarocrud-frontend-88984f6e4454.herokuapp.com",
//     env: {

//     },
//     specPattern: "cypress/e2e/**/**/*.feature",
//     setupNodeEvents(on, config) {
//       on("file:preprocessor", cucumber());
//     },
//   },
// });

const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/**/*.feature",
    env: {
      TAGS: "not @ignore",
    },
    baseUrl: "https://rarocrud-frontend-88984f6e4454.herokuapp.com/",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );

      return config;
    },
  },
});
