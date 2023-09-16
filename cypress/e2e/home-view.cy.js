describe('Test HomeView', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/pets', {
      statusCode: 200,
      fixture: 'allPets.json'
    })
    .visit('http://localhost:3000')
  })

  it('should display header', () => {
    cy.visit('http://localhost:3000')
    cy.get('.petbook-logo')
      .should('have.attr', 'alt')
    cy.get('h1')
      .should('contain', 'PetB🐾k')
    cy.get('.title-container > h2')
      .contains('Your Pet\'s Perfect Page')
  })

  it.only('should delete pet card', () => {
    cy.intercept('DELETE', 'http://localhost:3001/api/v1/pets/3', {
      statusCode: 204
    }).as('deleteRequest');

    cy.get('.all-pets-container').find('.pet-card').should('have.length', 4)
    cy.get('.all-pets-container > :nth-child(3)')
      .get(':nth-child(3) > .info-container > .icon-container > .delete-icon').click();

    cy.wait('@deleteRequest');
  })

  it('should display card', () => {
    cy.get(':nth-child(1) > .info-container > .pet-icon')
      .should('have.attr', 'alt')
    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Oreo')
    cy.get(':nth-child(1) > .info-container > h3')
      .should('contain', 'Cat')
    cy.get(':nth-child(1) > .info-container > .owner')
      .should('contain', 'Owner: Judy')
  })

  it('should take you to pet details when link is clicked', () => {
    cy.get(':nth-child(1) > .info-container > a > .detail-link-icon').first().click()
      .url().should('eq', 'http://localhost:3000/1')
  })
  
  it('Should display error message with a 500 level error', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/pets', {
      statusCode: 500})
      cy.get('.error > h2').contains('Request failed - Unable to retrieve contacts from server.')    
  })

  it('Should display URL error page with a 404 level error', () => {
    cy.visit('http://localhost:3000/nonsense')
    cy.url().should('eq', 'http://localhost:3000/nonsense')
    cy.get('.error > h2').contains('Unable to retrieve contacts from server.')    
    cy.get('.error-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
    })
})
