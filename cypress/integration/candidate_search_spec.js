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
    it('Move candidates to Hired', function(){
        cy.get('.App-column:nth-child(1) .CrewMember-up').click({ multiple: true });
        cy.get('.App-column:nth-child(2) .CrewMember-up').click({ multiple: true });
        expect(cy.get('.App-column:nth-child(2) .CrewMember-up').should('have.length', 0))
    });
    it.skip('Move Hired candidates back to Interviewing', function(){
        //ToDo: add test implementation
    });
    it.skip('Move one candidate back from Interviewing to Applied', function(){
        //ToDo: add test implementation
    });
});

describe("Candidate search", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    it('By name', function () {
        cy.get('#name').clear().type('lloyd')
            .should('have.value', 'lloyd');
            // .should('contains', 'lloyd');

        cy.get('[type="submit"]').click();
        try {
            cy.get('App-column,.CrewMember-container').should('contain', 'lloyd gonzalez')
        } catch (err) {
            console.log('Candidate with such name is not found', err)
        }
        expect(cy.get('.App-column .CrewMemeber-name').should('have.length', 1));
        cy.get('#name').clear()
    });
    it('By City', function () {
        cy.get('#city').clear().type('liverpool')
            .should('have.value', 'liverpool');

        cy.get('[type="submit"]').click();
        try{
            cy.get('.App-column .CrewMemeber-name div').should('contain', 'linda ruize' && 'liverpool');
        } catch (err) {cy.log('Candidate not found', err)};
        expect(cy.get('.App-column .CrewMember-info').should('have.length', 1));
        cy.get('#city').clear()
            .should('have.value', '');
    });
    it('clear search criteria', function () {
        cy.get('#name').clear().type('linda')
            .should('have.value', 'linda');

        cy.get('#city').clear().type('liverpool')
            .should('have.value', 'liverpool');

        cy.get('[type="submit"]').click();
        expect(cy.get('.App-column .CrewMember-info').should('have.length', 1));
        cy.get('#filters [type="button"]').click();
            // .should('to.be', 'empty'); clearing content of field does not work
        expect(cy.get('.App-column .CrewMember-info').should('have.length', 5))
    })
})