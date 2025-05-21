declare namespace Cypress {
  interface  Chainable<Subject> {
    /**
     * Custom command to perform login
     */
    LoginAPI(): Chainable<void>,

    /**
     * Custom command to wait
     */
    waitShort(): Chainable<Subject>,
    waitMedium(): Chainable<Subject>,  
    waitLong(): Chainable<Subject>  
  }
}
