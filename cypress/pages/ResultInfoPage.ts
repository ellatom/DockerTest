import { Page } from './Page';

class ResultInfoPage extends Page {

    //Selectors
    get infoTitle(){
        return cy.get('[data-testid="hero__primary-text"]');
    }

    get infoRate(){
        return cy.get('[data-testid="hero-rating-bar__aggregate-rating__score"]  > [class="sc-d541859f-1 imUuxf"]')
            .filter(':visible');
    }

    get firstStarName() {
        // Selects the first visible star link in the cast list, regardless of nm number
        return cy.get('a[href^="/name/nm"][href*="?ref_=tt_ov_st_1"]').filter(':visible').first();
    }
}

export default new ResultInfoPage();