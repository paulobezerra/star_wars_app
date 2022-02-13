describe('Navigation', () => {
  it('should navigate from movies to people', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[data-test-id="link-to-characteres"]').click()

    cy.wait(1000)

    cy.url().should('include', '/people')
    
    cy.wait(1000)

    cy.get('h2').contains('Characteres')
    cy.get('a[data-test-id="link-to-characteres"]')
      .should('have.class', 'active')

  })
})

describe("Menu mobile", () => {
  it("should show mobile menu when click in menu button", () => {
    cy.viewport('iphone-6')

    cy.get('button[data-test-id="toggle-nav-btn"]').click()

    cy.wait(1000)

    cy.get('nav[data-test-id="mobile-nav"]').should('have.class', 'opened')


    cy.get('a[data-test-id="link-to-characteres"]').click()

    cy.wait(1000)

    cy.get('nav[data-test-id="mobile-nav"]').should('have.class', 'closed')
    cy.get('h2').contains('Characteres')
  })
})