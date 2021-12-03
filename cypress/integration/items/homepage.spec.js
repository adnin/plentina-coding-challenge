/* eslint-disable no-undef */
/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  it("load product list", () => {
    cy.visit("/");

    // dispatch Redux action
    cy.window()
      .its("store")
      .invoke("dispatch", { type: "GET_PRODUCTS_REQUEST" });

    cy.get("div").should("have.class", "loader");
    // check if the app has updated its UI
    cy.contains("h5", "How fast do you want to go?");

    const products = (win) => win.store.getState().getProducts.products;

    cy.window().pipe(products).should("have.length", 9);
  });

  it("open product details", () => {
    cy.get(
      "#products > div:nth-child(2) > div:nth-child(2) > div > h3 > span > span:nth-child(1)"
    ).click({ force: true });

    cy.get('[data-test="product-id"]').should("be.exist");
    cy.contains("h2", "Apple TV Bundle");
  });

  it("close product details", () => {
    cy.get(
      "#headlessui-dialog-1 > div > div:nth-child(3) > div > button > svg"
    ).click({ force: true });

    cy.get('[data-test="product-id"]').should("not.be.exist");
  });
});
