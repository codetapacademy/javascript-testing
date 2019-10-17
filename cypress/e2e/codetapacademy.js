const user = cy
describe('awesome e learning', () => {
  it('shows tutorials and courses', () => {
    user
      .visit('/')
      .queryBy("#react-will-render-here-and-it-is-really-awesome > div > div.sc-cMljjf.fuBDal > div > div > h1")
      .get(':nth-child(1) > .sc-fjdhpX > .sc-ckVGcZ')
      .click()
      .wait(1500)
      .get('.sc-brqgnP > :nth-child(1) > h1')
      .should('have.text', 'Build my First Ever Website')
  })
})
