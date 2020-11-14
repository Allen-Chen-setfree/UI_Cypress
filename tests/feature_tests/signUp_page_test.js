import {SELECTORS as signUpPage} from './../../pageObject/HomePage.js';

describe('The Sign UpPage', () => {

   const INVALID_EMAIL = 'test12345'
   const EMAIL = 'test12345@test.com'
   const REJECT_MSG = "Doesn't look like a valid email address."

   beforeEach(() => {
     cy.visit(signUpPage.URL)
   })


  it('reject invlaid email sign up', () => {
    // macbook-16 1536x960
    cy.viewport('macbook-16')   
    cy.get(signUpPage.SIGNUP_EMAIL_INPUT).type(INVALID_EMAIL)
    cy.get(signUpPage.START_MIDDLE_BUTTON).click()
    cy.get(signUpPage.REJECT_MESSAGE_LABEL).contains(REJECT_MSG)
  })


  it('sign up successfully', () => {
   // macbook-15 1440x900
    cy.viewport('macbook-15')
    cy.get(signUpPage.SIGNUP_EMAIL_INPUT).type(EMAIL)
    cy.get(signUpPage.START_TOP_BUTTON).click()
    cy.get(signUpPage.STANDARD_PLAN_BUTTON).click()
    cy.get(signUpPage.PLAN_CONTINUE_BUTTON).click()

    // validate the email address is prefilled and can be updated
    cy.get(signUpPage.USERNAME_EMAIL_INPUT).should('have.value', EMAIL) 
    cy.get(signUpPage.USERNAME_EMAIL_INPUT).clear().type(EMAIL+'.au').should('have.value', EMAIL+'.au')   
    cy.get(signUpPage.PASSWORD_INPUT).type('test123456')
    cy.get(signUpPage.FIRST_NAME_INPUT).type('Allen')
    cy.get(signUpPage.LAST_NAME_INPUT).type('Chen')
    cy.get(signUpPage.SEX_MALE_SELECT).click()
    cy.get(signUpPage.DOB_DAY_INPUT).type('11')
    cy.get(signUpPage.DOB_MONTH_INPUT ).type('11')
    cy.get(signUpPage.DOB_YEAR_INPUT).type('1991')
    cy.get(signUpPage.POSTCODE_INPUT ).type('2000')
    cy.get(signUpPage.PAY_CARD_SELECT).click()
    cy.get(signUpPage.CARD_NUM_INPUT, { timeout: 10000}).should('be.visible').type('5217295265197834')
    cy.get(signUpPage.CARD_EXPIRE_INPUT).type('0321')
    cy.get(signUpPage.CARD_CVV_INPUT).type('123')
    cy.get(signUpPage.AGREE_TERMS_SELECT).click()
    cy.get(signUpPage.START_WATCHING_BUTTON).click()
  })
})