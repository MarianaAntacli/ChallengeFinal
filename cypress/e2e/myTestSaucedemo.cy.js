//PLAN DE PRUEBAS: https://docs.google.com/spreadsheets/d/1rkIB1XPre809HUP_wOpfdPcnQjUYjjYPY1cAKxHigyI/edit?usp=sharing
// REPORTE DE BUGS (TRELLO):https://trello.com/invite/b/66d44927b4f5847c91543f7b/ATTI9b354678276650acb330c501a1b74684C9A9DA5D/qa-automation-challenge-final

import { fields } from '../support/myInformationFields';

describe('Prueba de Checkout en Sauce Demo', () => {
  beforeEach(() => {
    //Paso 1: visitar la pagina
    cy.visit('https://www.saucedemo.com');
    cy.wait(3000);
    })

    it('Proceso de checkout exitoso con Standard User - 1 producto', () => {
        //Paso 2: hacer login
      cy.login ('standard_user');
     
        // Paso 3: Agregar el producto al carrito (aplica el comando creado en commands, agregando aca la parte variable)
        const items = [
          'sauce-labs-backpack',
      ];
      cy.addItemsToCart(items);
      
      /* cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click; */
  
        // Paso 4: Ir al carrito
      cy.get('[data-test="shopping-cart-link"]').click();
  
        // Paso 5: Click en el botón de checkout
      cy.get('[data-test="checkout"]').click();
  
        // Paso 6: Llenar los campos solicitados en My Information (el array esta declarado en un archivo  en support  e importado)
      fields.forEach(field => {
          cy.get(field.selector).type(field.value);
      });
      
      /* cy.get('[data-test="firstName"]').type('Mariana');
      cy.get('[data-test="lastName"]').type('Antacli');
      cy.get('[data-test="postalCode"]').type('5008') */;
  
        // Paso 7: Click en continue
      cy.get('[data-test="continue"]').click();
  
     // Paso 8: Validar que se haya realizado el checkout (checkout overview)
      cy.url().should('include', '/checkout-step-two.html');
      cy.contains('Checkout: Overview').should('be.visible');
   
        // Paso 9: Click on finish
      cy.get('[data-test="finish"]').click();
  
       // Paso 10: Validar mensaje de checkout complete
      cy.url().should('include', '/checkout-complete.html');
      cy.contains('Thank you for your order!').should('be.visible'); 
  
          // Paso 11: Click on Back home
      cy.get('[data-test="back-to-products"]').click();
  
        // Paso 12: Click en el menú hamburguesa (margen superior izquierdo)
      cy.get('#react-burger-menu-btn').click();
  
        // Paso 13: Realizar el logout
      cy.get('[data-test="logout-sidebar-link"]').click();
    });



    it('Proceso de checkout exitoso con Standard User - 5 productos', () => {
        //Paso 2: hacer login
      cy.login ('standard_user');
    
        // Paso 3: Agregar el producto al carrito (aplica el comando creado en commands, agregando aca la parte variable)
        const items = [
          'sauce-labs-backpack',
          'sauce-labs-bike-light',
          'sauce-labs-bolt-t-shirt',
          'sauce-labs-fleece-jacket',
          'sauce-labs-onesie'
      ];
      cy.addItemsToCart(items);
      
    /*   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click 
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click
      cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click
      cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click */
  
  
        // Paso 4: Ir al carrito
      cy.get('[data-test="shopping-cart-link"]').click();
  
        // Paso 5: Click en el botón de checkout
      cy.get('[data-test="checkout"]').click();
  
           // Paso 6: Llenar los campos solicitados en My Information (el array esta declarado en un archivo  en support  e importado)
      fields.forEach(field => {
        cy.get(field.selector).type(field.value);
    });
  
        // Paso 7: Click en continue
      cy.get('[data-test="continue"]').click();
  
     // Paso 8: Validar que se haya realizado el checkout (checkout overview)
      cy.url().should('include', '/checkout-step-two.html');
      cy.contains('Checkout: Overview').should('be.visible');
   
      // Paso 9: Click on finish
      cy.get('[data-test="finish"]').click();
  
      // Paso 10: Validar mensaje de checkout complete
      cy.url().should('include', '/checkout-complete.html');
      cy.contains('Thank you for your order!').should('be.visible');
  
        // Paso 11: Click on Back home
      cy.get('[data-test="back-to-products"]').click();
  
        // Paso 12: Click en el menú hamburguesa (margen superior izquierdo)
      cy.get('#react-burger-menu-btn').click();
  
        // Paso 13: Realizar el logout
      cy.get('[data-test="logout-sidebar-link"]').click();

    });
   

    
    it('Proceso de checkout con Standard User - 0 productos', () => {
        //Paso 2: hacer login
        cy.login ('standard_user');
      
  
        // Paso 3: No agrega ningun producto al carrito
     
  
        // Paso 4: Ir al carrito
      cy.get('[data-test="shopping-cart-link"]').click();
  
      // Paso 5: Click en el botón de checkout
      cy.get('[data-test="checkout"]').click();


     // Paso 6: Llenar los campos solicitados en My Information (el array esta declarado en un archivo  en support  e importado)
     fields.forEach(field => {
      cy.get(field.selector).type(field.value);
  });
  
      // Paso 7: Click en continue
      cy.get('[data-test="continue"]').click();
  
     // Paso 8: Validar que se haya realizado el checkout (checkout overview)
      cy.url().should('include', '/checkout-step-two.html');
      cy.contains('Checkout: Overview').should('be.visible');
   
      // Paso 9: Click on finish
      cy.get('[data-test="finish"]').click();
  
      // Paso 10: Validar mensaje de checkout complete
      cy.url().should('include', '/checkout-complete.html');
      cy.contains('Thank you for your order!').should('be.visible'); 
  
      // Paso 11: Click on Back home
      cy.get('[data-test="back-to-products"]').click();
  
     // Paso 12: Click en el menú hamburguesa (margen superior izquierdo)
      cy.get('#react-burger-menu-btn').click();
  
      // Paso 13: Realizar el logout
      cy.get('[data-test="logout-sidebar-link"]').click();
  
    });
    
    
    it('Proceso de checkout exitoso con Problem User - 1 producto', () => {
        //Paso 2: hacer login
      cy.login ('problem_user');
    
  
        // Paso 3: Agregar el producto al carrito (aplica el comando creado en commands, agregando aca la parte variable)
        const items = [
          'sauce-labs-backpack',
      ];
      cy.addItemsToCart(items);
  
      // Paso 4: Ir al carrito
      cy.get('[data-test="shopping-cart-link"]').click();
  
      // Paso 5: Click en el botón de checkout
      cy.get('[data-test="checkout"]').click();
  
         // Paso 6: Llenar los campos solicitados en My Information (el array esta declarado en un archivo  en support  e importado)
      fields.forEach(field => {
          cy.get(field.selector).type(field.value);
      });
  
      // Paso 7: Click en continue
      cy.get('[data-test="continue"]').click();
  
      // Paso 8: Validar que se haya realizado el checkout (checkout overview)
      cy.url().should('include', '/checkout-step-two.html');
      cy.contains('Checkout: OverviewW').should('be.visible');
   
      // Paso 9: Click on finish
      cy.get('[data-test="finish"]').click();
  
      // Paso 10: Validar mensaje de checkout complete
      cy.url().should('include', '/checkout-complete.html');
      cy.contains('Thank you for your order!').should('be.visible');

      // Paso 11: Click on Back home
      cy.get('[data-test="back-to-products"]').click();
  
     // Paso 12: Click en el menú hamburguesa (margen superior izquierdo)
      cy.get('#react-burger-menu-btn').click();
  
      // Paso 13: Realizar el logout
      cy.get('[data-test="logout-sidebar-link"]').click();
    });
  
})

