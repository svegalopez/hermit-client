import { defineConfig } from "cypress";
const codeCoverageTask = require('@bahmutov/cypress-code-coverage/plugin')

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return Object.assign({}, config, codeCoverageTask(on, config))
    },
    video: false,
    baseUrl: 'http://localhost:3000'
  },
});
