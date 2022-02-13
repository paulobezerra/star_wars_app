describe('Navigate to person', () => {
  it('should navigate to person', () => {
    cy.visit('http://localhost:3000/people')

    cy.get('[data-test-id="person-link-1"]').click()

    cy.wait(1000)

    cy.url().should('include', '/people/1')
    
    cy.wait(1000)

    cy.get('h2').contains('Luke Skywalker')

    cy.get('h3').contains('Movies')
  })
})


describe('Load to people', () => {
  it('should load more people', () => {
    cy.visit('http://localhost:3000/people')

    cy.get('[data-test-id="load-more-people"]').click()
    
    cy.wait(1000)

    cy.get('[data-test-id="person-link-20"]').click()
    
    cy.wait(1000)

    cy.url().should('include', '/people/20')

    cy.get('h2').contains('Yoda')

    cy.get('h3').contains('Movies')
  })
})
