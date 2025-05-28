import { Page } from '../pages/Page';

class HomePage extends Page {

    //Selectors
    get searchBar() {
        return cy.get('[data-testid="suggestion-search"]');
    }

    get searchBarMenuList() {
        return cy.get('div#react-autowhatever-navSuggestionSearch');
    }

    get menuResults() {
        return cy.get('[data-testid="search-result--const"]');
    }

    //Actoins
    clickFirstItemFromMenuListElement() {
        this.menuResults
            .should('have.length.greaterThan', 0)
            .first()
            .click();
        return this;
    }

    // In HomePage.ts
    searchForFilm(filmName: string) {
        this.searchBar.waitMedium();
        this.searchText(this.searchBar, filmName);
        return this;
    }
}

export default new HomePage();