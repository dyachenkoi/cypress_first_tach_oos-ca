describe ("Candidate search", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    it.only('By name', function() {
        cy.get('#name').type('lloyd111')
        cy.get('[type="submit"]').click()
        try {
            cy.get('App-column,.CrewMember-container').should('contain', 'lloyd gonzalez')
        } catch (err) {console.log('Candidate with such name is not found', err)}
        expect(cy.get('.App-column,.CrewMember-container').should('have.length', 1))
    });
    it.skip('By City', function() {
        cy.get('.App-column:nth-child(1) .CrewMember-up').click({ multiple: true });
        expect(cy.get('.App-column:nth-child(1)').should('not.have.class', 'CrewMember-up'));
        expect(cy.get('.App-column:nth-child(1) .CrewMember-up').should('not.exist'))
    });
})