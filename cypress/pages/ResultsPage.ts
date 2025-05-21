import { Page } from './Page';

class ResultsPage extends Page {
    
    //Selectors
    get headerText() {
        return cy.get('h1');
    }

    get resultsList(){
        return cy.get('[data-testid="find-results-section-title"] > div > ul > li');
    }

}

export default new ResultsPage();