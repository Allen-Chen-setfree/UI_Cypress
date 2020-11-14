import stan from './../utility/login.js';

import {SELECTORS as playPage} from './../../pageObject/PlayPage.js';

describe('The Play Page', () => {
  it('successfully loads', () => {
  stan.login()
  cy.get(playPage.CATEGORY_TITLE_LIST).eq(2).click()
  cy.title().should('eq', 'Stan Iconic Series - Stan')

  })
})