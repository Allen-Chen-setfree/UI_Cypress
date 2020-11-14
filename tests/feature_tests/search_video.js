import stan from './../utility/login.js';

import {SELECTORS as playPage} from './../../pageObject/PlayPage.js';

describe('The Play Page', () => {
  it('successfully loads', () => {
  stan.login()
  cy.get(playPage.SEARCH_BUTTON).click()
  cy.get(playPage.SEARCH_INPUT).type('Breaking Bad')
  cy.get(playPage.PROGRAMS_SEARCH_LIST).first().invoke('attr', 'alt').should('contain','Breaking Bad')

  })
})