import stan from './../utility/login.js';

import {SELECTORS as playPage} from './../../pageObject/PlayPage.js';

describe('The Play Page', () => {
  it('successfully loads', () => {
  stan.login()
  cy.get(playPage.USER_PROFILE_ICON).trigger('mouseover')  // TODO cypress not support hover. need figure out a reliable workaround
  cy.get(playPage.PROFILE_DROPDOWN_MENU).should('be.visible').eq(1).click()
  cy.url().should('eq', "https://play.stan.com.au/my/history")
  
  })
})