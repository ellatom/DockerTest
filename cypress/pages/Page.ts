export class Page {

    /**
     * Navigates to a given partial URL.
     */
    visit(partialUrl: string = ""): this {
        cy.visit(`/${partialUrl}`);
        return this;
    }

    /**
     * Clicks a Cypress element after ensuring it is visible.
     */
    clickElement(element: Cypress.Chainable<JQuery<HTMLElement>>): this {
        element.should('be.visible').click();
        return this;
    }

    /**
     * Types text into an element and presses Enter.
     */
    searchText(element, text: string): this {
        element
            .should('be.visible')
            .click()
            .clear()
            .type(text)
            .type("{enter}");
        return this;
    }

    /**
     * Shows the search menu for a given text.
     */
    showSearchMenuForSearchText(element, text: string): this {
        element
            .click()
            .clear()
            .type(text)
            .type("{enter}");
        return this;
    }

    /**
     * Asserts that an element is visible.
     */
    shouldBeVisible(element: Cypress.Chainable<JQuery<HTMLElement>>): this {
        element.should("be.visible");
        return this;
    }

    /**
     * Asserts that the URL contains the given text.
     */
    urlContainsText(text: string): this {
        cy.url().should('include', encodeURIComponent(text));
        return this;
    }
}


export default new Page();