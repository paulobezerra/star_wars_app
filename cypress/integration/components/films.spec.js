describe('Navigate to film', () => {
  it('should navigate to movie', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-test-id="film-link-1"]').click()

    cy.wait(1000)

    cy.url().should('include', '/films/1')
    
    cy.wait(1000)

    cy.get('h2').contains('A New Hope')

    cy.get('h3').contains('Characters')
  })
})
