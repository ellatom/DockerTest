import { Page } from '../pages/Page';

class HomePage extends Page {

    //Selectors
    get searchBar() {
        return cy.get('[data-testid="suggestion-search"]');
    }
}

export default new HomePage();