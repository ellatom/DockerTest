import { Page } from '../pages/Page';

class HomePage extends Page {

    //Selectors
    get searchBar() {
        return cy.get('[data-testid="suggestion-search"]');
    }

    get searchBarMenuList() {
        return cy.get('.react-autosuggest__suggestions-list');
    }

    get menuResults() {
        return cy.get('[data-testid="search-result--const"]');
    }

    //Actoins
    clickFirstItemFromMenuListElement() {
        this.menuResults
            .first()
            .click();
        return this;
    }

    searchForFilm(filmName: string) {
        // In HomePage.ts
        this.searchBar.waitMedium();
        this.searchText(this.searchBar, filmName);
        return this;
    }
}

export default new HomePage();