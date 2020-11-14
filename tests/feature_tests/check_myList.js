import stan from './../utility/login.js';

import {SELECTORS as playPage} from './../../pageObject/PlayPage.js';

describe('The Play Page', () => {
  it('successfully loads', () => {
  stan.login()
  cy.viewport('macbook-16')
  cy.get(playPage.MYLIST_TOP_MENU).click()
  cy.url().should('eq', 'https://play.stan.com.au/my/list')

  })
})