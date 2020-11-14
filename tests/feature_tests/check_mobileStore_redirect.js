import stan from './../utility/login.js';

import {SELECTORS as playPage} from './../../pageObject/PlayPage.js';


describe('The Play Page', () => {

  it('successfully loads', () => {
  stan.login()
  cy.get(playPage.BOTTOM_STORE_LINKS).eq(1).then(($a) => {

       //workaround for cross-origin
   //    expect($a.prop('href')).to.eq('https://play.google.com/store/apps/details?id=au.com.stan.and')
       cy.request($a.prop('href')).its('headers').should('include', 'https://play.google.com/store/apps/details?id=au.com.stan.and')
    //   cy.request($a.prop('href')).its('headers').should('include', 'Stan. – Apps on Google Play')
      })

  })

})