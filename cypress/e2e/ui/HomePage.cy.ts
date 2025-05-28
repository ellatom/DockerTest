import HomePage from "../../pages/HomePage";
import ResultsPage from "../../pages/ResultsPage";
import { SearchItem } from "../../types/searchItems";
import { FILM_NAMES } from "../../fixtures/filmNames";
import { findItemByName } from "../../support/apiHelpers";

describe('Home page Tests', () => {
  let items: SearchItem[];

  before(function () {
    cy.visit("/");
    return cy.fixture<SearchItem[]>("searchItems").then((data) => {
      items = data;
    });
  });

  beforeEach(function () {
    cy.visit("/");
  });

  FILM_NAMES.forEach(filmName => {
    it(`Results should be displayed after searching for film: ${filmName}`, function () {
      // Arrange
      const item = findItemByName(items, filmName);

      // Act
      HomePage.searchForFilm(item.name);

      // Assert
      ResultsPage.urlContainsText(filmName);
      ResultsPage.headerText
        .waitMedium()
        .should('contain.text', filmName.toLowerCase());
      ResultsPage.resultsList.should('have.length.gte', 0);
    });
  });
});
