import HomePage from "../../pages/HomePage";
import ResultInfoPage from "../../pages/ResultInfoPage";
import { FILM_NAMES } from "../../fixtures/filmNames";
import { findItemByName } from "../../support/apiHelpers";
import { SearchItem } from "../../types/searchItems";

describe('Result info page Tests', () => {
  let items: SearchItem[];

  beforeEach(function () {
    cy.visit("/");
    return cy.fixture<SearchItem[]>("searchItems").then((data) => {
      items = data;
    });
  });

  FILM_NAMES.forEach(itemName => {
    it(`Searched item info is displayed after search in search bar: ${itemName}`, function () {
      // Arrange
      const item = findItemByName(items, itemName);

      // Act
      HomePage.searchForFilmByMenu(item.name);

      // Assert
      ResultInfoPage.infoTitle
        .waitMedium()
        .should('contain.text', item.name);
      ResultInfoPage.infoRate
        .waitMedium()
        .invoke('text')
        .then(text => parseFloat(text))
        .should('be.greaterThan', item.ratingThreshold);
      ResultInfoPage.firstStarName
        .waitMedium()
        .should('contain.text', item.firstStar);
    });
  });
});
