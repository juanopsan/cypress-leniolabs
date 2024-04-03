describe('login suite', () => {
  beforeEach(() => {
    cy.visit('auth/login')
  })

  it('should login successfully with valid credentials', () => {
    cy.get('input[name=username]')
      .clear()
      .type('Admin')

    cy.get('input[name=password]')
      .clear()
      .type('admin123')

    cy.get('button[type=submit]')
      .should('be.visible')
      .click()

    cy.get('h6')
      .should('have.text', 'Dashboard')
  })
})