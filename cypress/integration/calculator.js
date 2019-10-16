describe('awesome e learning', () => {
  it('shows tutorials and courses', () => {
    cy
      .visit('https://codetap.academy')
      .get(':nth-child(1) > .sc-fjdhpX > .sc-ckVGcZ')
      .click()
      .wait(1500)
      .get('.sc-brqgnP > :nth-child(1) > h1')
      .should('have.text', 'Build my First Ever Website')
  })
})
