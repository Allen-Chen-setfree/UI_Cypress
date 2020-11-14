import stan from '../utility/login.js';
import {SELECTORS as playPage} from '../pageObject/PlayPage.js';
import {SELECTORS as historyPage} from '../pageObject/HistoryPage.js';
import {SELECTORS as myListPage} from '../pageObject/MyListPage.js';
import {SELECTORS as programPage} from '../pageObject/ProgramPage.js';

describe('The Play Page', () => {

   beforeEach(() => {
     stan.login()
   })

  it('Category Navigate', () => {
    cy.get(playPage.CATEGORY_TITLE_LIST).eq(2).click()  //TODO: parameterized
    cy.title().should('eq', 'Stan Iconic Series - Stan')
  })

  it('Video Search', () => {
    cy.viewport('iphone-x')
    cy.get(playPage.MOBILE_SEARCH_BUTTON).click()
    cy.get(playPage.MOBILE_SEARCH_INPUT).type('Breaking Bad')
    cy.get(playPage.PROGRAMS_SEARCH_LIST).first().invoke('attr', 'alt').should('contain','Breaking Bad')
  })

  it('Bottom Menus', () => {
   //Cypress doesn't support multiple tabs, the following is a workaround. 
  cy.get(playPage.BOTTOM_MENUS).eq(2).invoke('attr', 'href')
      .then(href => {
        cy.visit(href);
      })
  cy.url().should('eq','https://www.stan.com.au/privacy-policy')
  })

  it('Add to Mylist', () => {
    cy.viewport('macbook-16')
    //navigate to one video
    cy.get(playPage.PROGRAMS_HOME_LIST).eq(10).invoke('attr', 'href')
        .then(href => {cy.visit(playPage.URL+href)})
  
     cy.url().then(url => {   
         const program_url = cy.url()        // save to verify it in my list
         cy.log(program_url)
         cy.get(programPage.PROGRAM_ADDTOLIST_BUTTON).click()                 // add to list
         cy.get(programPage.PROGRAM_POST_LABEL).invoke('attr', 'alt')
             .then(alt => {
              const program = alt	      // save the name to verify it in my list

               cy.get(playPage.MYLIST_TOP_MENU).click()        //navigate to my list page
               cy.url().should('eq', 'https://play.stan.com.au/my/list')
               cy.get(myListPage.PROGRAMS_LIST)                   // match the program added
                   .each ( ($a) => {
                      if ($a.prop('alt') == program) {
                         $a.click()
                      }
                    })
                  cy.get(programPage.PROGRAM_REMOVELIST_BUTTON).click()   //remove it to restore

                  cy.url().then(url => {
                   program_url.should('include', url)                     // verify the program added to list is expected
                  })
   
              })
         })
   })

  it('Social Media Link', () => {
   cy.viewport('macbook-15')
     //workaround for cross-origin
    cy.get(playPage.BOTTOM_SOCIAL_LINKS).eq(1).should('have.attr', 'href', 'https://twitter.com/StanAustralia')
  })

it('Mobile Store', function () {
   cy.viewport('macbook-13')
  cy.get(playPage.BOTTOM_STORE_LINKS).eq(1).then(($a) => {
       //workaround for cross-origin, interact with external website
     cy.request($a.prop('href')).its('status').should('eq', 200)
     cy.request($a.prop('href')).its('body')
       .should('include', 'https://play.google.com/store/apps/details?id=au.com.stan.and')
       .should('include', "Stan. - Apps on Google Play")
      })
  })

  it('Play Playback', () => {
   cy.viewport('macbook-11')
   cy.get(playPage.PROGRAMS_HOME_LIST).eq(10).invoke('attr', 'href')   //select a program
      .then(href => {
         cy.visit(playPage.URL+href)
         const program1 = href	      // use href to identify program
         cy.get(playPage.PROGRAM_PLAY_BUTTON, { timeout: 100000}).should('be.visible').click()  // play the video

         // playback
         cy.visit(playPage.URL)
         cy.get(playPage.CONTINUE_WATCH_LINK).click()      //navigate to watch history page
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

  it('Watch History', () => {
    cy.viewport('samsung-s10')
    cy.get(playPage.MOBILE_MENU_BUTTON).click()
    cy.get(playPage.MOBILE_HISTORY_BUTTON).click()
    //TODO: desktopverion - cypress not support hover. need figure out a workaround
    //cy.get(playPage.USER_PROFILE_ICON).trigger('mouseover') 
    //cy.get(playPage.PROFILE_DROPDOWN_MENU).should('be.visible').eq(1).click()
    cy.url().should('eq', "https://play.stan.com.au/my/history")
  })

})