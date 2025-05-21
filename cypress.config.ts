
import { defineConfig } from 'cypress';

export default defineConfig({
  pageLoadTimeout: 120000,
  e2e: {
    baseUrl: 'https://example.cypress.io/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true
  }
});
