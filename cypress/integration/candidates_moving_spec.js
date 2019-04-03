describe ("Moving candidates between columns", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    it('Confirm presence of UI elements', function() {
        try {
            cy.get('h2').should('contain', 'Applied' && 'Interviewing' && 'Hired')
        } catch (err) {cy.log('Columns are not present', err)}
        cy.title().should('include', 'OOS: Crew applications')
        cy.get('[type="submit"]').should('contain', 'Submit')
        cy.get('[type="button"]').should('contain', 'Clear')

    });
    it('Move from Applied into Interviewing', function() {
        cy.get('.App-column:nth-child(1) .CrewMember-up').click({ multiple: true });
        expect(cy.get('.App-column:nth-child(1)').should('not.have.class', 'CrewMember-up'));
        expect(cy.get('.App-column:nth-child(1) .CrewMember-up').should('not.exist'))

        });
    it('Move from Interviewing to Hired', function(){
        try{
            cy.get('.App-column:nth-child(2) .CrewMember-up').click({ multiple: true });
        } catch (err) {
            console.log('Nothing to move out from Interviewing section', err)
        }
        expect(cy.get('.App-column,.CrewMember-up:nth-child(2)').should('arguments', 0))
    });
})