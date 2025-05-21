export class Page {

    // Actions
    visit(partialUrl: string = ""): this {
        cy.visit(`/${partialUrl}`);
        return this;
    }

    clickElement(element: Cypress.Chainable<JQuery<HTMLElement>>) {
        element.click();
    }

    searchText(element, text: string) {
        element
            .click()
            .clear()
            .type(text)
            .type("{enter}");
    }

    shouldBeVisible(element: Cypress.Chainable<JQuery<HTMLElement>>) {
        element.should("be.visible");
    }

    urlContainsText(text: string) {
        cy.url().should('include', encodeURIComponent(text));
    }
}


export default new Page();