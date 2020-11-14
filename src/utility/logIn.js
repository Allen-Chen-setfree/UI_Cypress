import {SELECTORS as homePage} from '../pageObject/HomePage.js';

   const USERNAME = 'update_username'
   const PASSWORD = 'update_password'

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

