/// <reference types="cypress" />

describe('funcinalidade endereços faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });


    it('deve fazer cadastrpo de faturamento com sucesso', () => {
        
        //cadastro de endereço
    });
});
