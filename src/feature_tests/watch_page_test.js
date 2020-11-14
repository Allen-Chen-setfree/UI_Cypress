import {SELECTORS as watchPage} from '../pageObject/WatchPage.js';

   beforeEach(() => {
     cy.visit(watchPage.URL)
   })

describe('The Watch Page', () => {
  it('watch the first video', () => {
    cy.viewport('macbook-13')
    cy.get(watchPage.VIDEO_LIST).first().click()

  })

  it('watch the last video', () => {
    cy.viewport('macbook-11')
    cy.get(watchPage.VIDEO_LIST).last().click()
  })


})