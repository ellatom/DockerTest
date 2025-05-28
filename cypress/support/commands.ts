// Custom Cypress commands to find elements not fetched from DB

const TIMEOUTS = {
  short: 5000,
  medium: 10000,
  long: 30000,
};

Cypress.Commands.add('waitShort', { prevSubject: true }, (subject) => {
  cy.wrap(subject, { timeout: TIMEOUTS.short }).should('be.visible');
});

Cypress.Commands.add('waitMedium', { prevSubject: true }, (subject) => {
  cy.wrap(subject, { timeout: TIMEOUTS.medium }).should('be.visible');
});

Cypress.Commands.add('waitLong', { prevSubject: true }, (subject) => {
  cy.wrap(subject, { timeout: TIMEOUTS.long }).should('be.visible');
});

