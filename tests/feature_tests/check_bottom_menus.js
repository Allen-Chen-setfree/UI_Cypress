import stan from './../utility/login.js';

import {SELECTORS as playPage} from './../../pageObject/PlayPage.js';

describe('The Play Page', () => {
  it('successfully loads', () => {
  stan.login()
  //  click will start a new tab. As cypress doesn't support multiple tabs, the following is a workaround
  cy.get(playPage.BOTTOM_MENUS).eq(2).invoke('attr', 'href')
      .then(href => {
        cy.visit(href);
      })
  cy.url().should('eq','https://www.stan.com.au/privacy-policy')
  })
})