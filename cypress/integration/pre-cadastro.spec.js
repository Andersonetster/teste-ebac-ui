/// <reference types="cypress"/>
var faker = require('faker');

describe('Funcionalidade pré-cadstro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('deve completar o cadastro com sucesso', () => {

        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('@netster1234$')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()    
        cy.get('.woocommerce-message').should ('contain' , 'etalhes da conta modificados com sucesso')    
    });

    it.only('deve completar o pre-cadastro usando comandos customizados', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha@!1234', 'anderson', 'Santos')
        //cy.get('.woocommerce-message').should ('contain' , 'dados customizados com sucesso')
    });
    
});