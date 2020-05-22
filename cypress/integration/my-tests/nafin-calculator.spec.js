describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
    describe('Load prestamo table', () => {
        it('Should show the amortization table with predefined data', () => {
            // Check if the page loads
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');

            // Fill forms data
            cy.get('#dispDate').clear().type('05/05/2020 {enter}');
            cy.get('#creditAmount').clear().type(20000);
            cy.get('#paymentMethod').select('Mensual');
            cy.get('#period').select('2');
            cy.get('#rate').clear().type('15.0');

            // Submit forms and close pop up window
            cy.contains('Calcular').click();
            cy.contains('Ahora no').click();

            // Check if the the table is visible and the rows are correct
            cy.get('#resultadosSimulador').should('be.visible');
            cy.get('#resultadosSimulador').get('tbody > tr').its('length').should('eq', 24);
        });
        
    });
});