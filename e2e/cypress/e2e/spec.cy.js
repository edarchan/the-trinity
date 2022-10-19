describe('Smoke Test', () => {
  it('Visits the thetrinity.one website', () => {
    cy.visit('https://thetrinity.one')

    cy.contains('Posts')

    cy.contains('read more').click()

    cy.url().should('include', '/posts/')
  })
})
