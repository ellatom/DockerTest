
import { defineConfig } from 'cypress';

export default defineConfig({
  retries: {
    runMode: 2,      // CI retry
    openMode: 0      // UI retry(cy:open)
  },
  pageLoadTimeout: 120000,
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
