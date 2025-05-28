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

    get firstStarName(){
        return cy.get('[href="/name/nm0000008/?ref_=tt_ov_st_1"]')
            .filter(':visible');
    }
}

export default new ResultInfoPage();