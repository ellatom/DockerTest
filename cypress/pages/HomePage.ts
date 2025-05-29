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

    searchForFilmByEnter(filmName: string) {
        // In HomePage.ts
        this.searchBar.waitMedium();
        this.searchText(this.searchBar, filmName);
        return this;
    }

    searchForFilmByMenu(name: string) {
        this.searchBar.waitMedium();
        this.showSearchMenuForSearchText(this.searchBar, name);
        this.searchBarMenuList.waitMedium();
        this.menuResults.should('have.length.greaterThan', 0);
        this.clickFirstItemFromMenuListElement();
    }
}

export default new HomePage();