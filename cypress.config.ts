
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.imdb.com/',
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
