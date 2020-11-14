import {SELECTORS as homePage} from '../pageObject/HomePage.js';

   const USERNAME = 'allenchen2084@gmail.com'
   const PASSWORD = "Test4Stan"

var Playpage = function() {



   this.login = function() {

      cy.visit(homePage.URL)
      cy.get(homePage.LOGIN_LAUNCH_BUTTON).click()
      cy.get(homePage.LOGIN_EMAIL_INPUT).type(USERNAME)
      cy.get(homePage.LOGIN_PASSWORD_INPUT).type(PASSWORD)
      cy.get(homePage.LOGIN_CONFIRM_BUTTON).click()
    }
};

module.exports = new Playpage();

