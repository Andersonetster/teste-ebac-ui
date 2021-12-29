/// <reference types="cypress" />

describe('funcionalidade pagina de produtos', () => {
        
    beforeEach(() => {
        cy.visit('produtos')
    });
   it('deve selecionar um produto da lista', ()=>{

        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(7)
            .contains('Apollo Running Short')
            .click()

        })
    it('deve adicionar o produto ao carrinho' , () =>{

        var quantidade =3  
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()

        cy.get('.button-variable-item-36').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)


    })

    it.only('deve adicionar produtos ao carrinhos usando comando customizados', () => {
        cy.addProdutos('Abominable Hoodie', 'XS', 'Blue', '4')
       
        
    });
    
    
});
