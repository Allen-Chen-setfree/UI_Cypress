import stan from './../utility/login.js';

import {SELECTORS as playPage} from './../../pageObject/PlayPage.js';
import {SELECTORS as historyPage} from './../../pageObject/HistoryPage.js';

describe('The Play Page', () => {

  it('successfully loads', () => {
  stan.login()
  cy.get(playPage.PROGRAMS_HOME_LIST).eq(10).invoke('attr', 'href')
      .then(href => {
      cy.visit(playPage.URL+href)
      const program1 = href	      // use href to identify program

   cy.get(playPage.PROGRAM_PLAY_BUTTON, { timeout: 100000}).should('be.visible').click()

   cy.visit(playPage.URL)

   cy.get(playPage.CONTINUE_WATCH_LINK)
       .invoke('attr', 'href')
       .then(href => {
        cy.visit(playPage.URL+href)
       })
     
    cy.get(historyPage.PROGRAMS_TITLE_LIST)
        .each( ($a) => {
             const program2 = $a.prop('href')

             // when program identity matches, select it
             if (program2.includes(program1)) {
                 cy.visit(program2)
              }

         })
     // verify it navigates to the selected program and ready for playback
      cy.get(playPage.PROGRAM_PLAY_BUTTON).contains('Continue')

       })

  })

})