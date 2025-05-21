import HomePage from "../../pages/HomePage";
import ResultsPage from "../../pages/ResultsPage";
import { SearchItems } from "../../types/searchItems";

describe('Home page Tests', () => {
  let items: SearchItems;

  beforeEach(function () {
    cy.visit("/");
    return cy.fixture("searchItems").then((data) => {
      items = data as SearchItems;
    });
  });

  it('Debug test version', function () {
    cy.log('Running test version 2025-05-20');
  });

  it('Results should be displayed after film Search', function () {
      HomePage.searchBar.waitMedium();
      HomePage.searchText(HomePage.searchBar, items.godfather);
      ResultsPage.urlContainsText(items.godfather);
      ResultsPage.headerText.waitMedium;
      ResultsPage.headerText.should('contain.text', items.godfather.toString().toLowerCase());
      ResultsPage.resultsList.should('have.length.gte', 0);
  })
});
