describe('Test', () => {
    it('stranka jede', () => {
        cy.visit('https://www.nzip.cz');
        cy.get('button').click();
    });
});