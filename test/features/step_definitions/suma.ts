import { assert }            from "chai";
import { Given, When, Then } from "@cucumber/cucumber";

import { Calculadora } from "./../../../src/calculadora";

/* Avoid use arrow functions because we can not access to the context "this" with arrow function" */
Given( "Dados dos numeros 1 y 2", function () {

    this.number1 = 1;
    this.number2 = 2;

    /* This info is printed only when the test fails */
    this.attach( "bla bla bla" );
    this.attach('{"some", "JSON"}}', 'application/json')

} );

Given( "Dados dos numeros -1 y 2", function () {

    this.number1 = -1;
    this.number2 = 2;

} );

Given( "Dados dos numeros 1 y -2", function () {

    this.number1 = 1;
    this.number2 = -2;

} );

Given( "Dados dos numeros -1 y -2", async function () {

    /* We can use methods defined in the context */
    console.info( "El valor de number1 en el contexto es: ", this.getNumber1() );
    console.info( this.method1() );
    console.info( await this.waitForPromise() );

    this.number1 = -1;
    this.number2 = -2;

} );

When( "Cuando los sumo", function () {

    try {

        this.resultado = Calculadora.suma( this.number1, this.number2 );
        this.exception = null;

    } catch ( error ) {
        this.exception = error;
    }

} );

Then( "La suma es 3", function () {

    /* Comment/Uncomment to test how this.attach works */
    assert.equal( this.resultado, 3 );
    // assert.equal( this.resultado, 4 );

} );

Then( "Obtengo una excepcion", function () {
    assert.isDefined( this.exception);
} );

/* ------------------- */

Given( "X - Dados dos numeros {int} y {int}", function ( a : number, b : number ) {

    this.number1 = a;
    this.number2 = b;

} );

Then( "X - La suma es {int}", function ( resultadoEsperado : number ) {

    assert.equal( this.resultado, resultadoEsperado );

} );

/* ------------------- */
