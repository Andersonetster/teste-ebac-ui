/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')
context('funcionalidade login', () =>{
    
    beforeEach(() => {
        cy.visit('minha-conta')  
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    


    it ('deve fazer login com sucesso' , () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac')


    })

    it('deve fazer login com sucesso usando - usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac')
        
    });

    it.only('deve fazer login com sucesso usando - usando fixture', () => {
        cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac')
        })   
    });

    it ('deve exibir uma mensagem de erro ao inseir usuário invalido' , () => {
        cy.get('#username').type('aluno_ebac@testecom')
        cy.get('#password').type('teste@testecom')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error > li').should('contain' , 'O usuário aluno_ebac@testecom não está registrado neste site')
    })

    it ('deve exibir uma mensagem de erro ao inseir usuário senha invalida' , () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@testecom')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida')
    })
})
