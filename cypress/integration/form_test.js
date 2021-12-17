describe('Form Submission', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('sanity checks', () => {
        expect(1 + 2).to.equal(3); 
        expect(2 + 2).not.to.equal(8);
    })

        const nameInput = () => cy.get('input[name=name]'); 
        const sizeInput = () => cy.get('input[name=size]'); 
        const topping1Input = () => cy.get('input[name=topping1]'); 
        const topping2Input = () => cy.get('input[name=topping2]'); 
        const specialInput = () => cy.get('input[name=special]'); 
        const submitBtn = () => cy.get('button[id="order-button"]');



    it('test that you can add text to the box', () => {
        nameInput().should('exist').should('have.value', "")
        //sizeInput().should('exist').should('have.value', "")
        //topping1Input().should('exist').should('have.value', "")
        //topping2Input().should('exist').should('have.value', "")
        specialInput().should('exist').should('have.value', "")
        //submitBtn().should('exist')

        nameInput()
        .should('have.value', '')
        .type('Caitlin')
        .should('have.value', 'Caitlin')

        specialInput()
        .should('have.value', '')
        .type('No Special Instructions')
        .should('have.value', 'No Special Instructions')


    })

    it('test that you can select multiple toppings', () => {
        topping1Input()
            .should('exist')
            .should('not.be.checked')
        
        topping1Input()
            .check()

        topping1Input()
            .should('be.checked')
            
    })

    it('test that you can submit the form', () => {
        nameInput()
            .should('exist')
            .should('have.value', '')
        specialInput()
            .should('exist')
            .should('have.value', '')
        submitBtn()
            .should('exist')
            .should('be.disabled')

        nameInput()
        .type('test')

        nameInput()
        .should('have.value', 'test')



    })




})