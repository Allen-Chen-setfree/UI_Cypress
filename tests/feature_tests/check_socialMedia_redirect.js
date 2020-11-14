import stan from './../utility/login.js';

import {SELECTORS as playPage} from './../../pageObject/PlayPage.js';

describe('The Play Page', () => {
  it('successfully loads', () => {
  stan.login()
  //  workaround for cross-origin
  cy.get(playPage.BOTTOM_SOCIAL_LINKS).eq(1).should('have.attr', 'href', 'https://twitter.com/StanAustralia')
  })
})