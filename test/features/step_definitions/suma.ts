import { assert }            from "chai";
import { Given, When, Then } from "@cucumber/cucumber";

import { Calculadora } from "./../../../src/calculadora";

Given( "Dados dos numeros 1 y 2", function () {

    this.number1 = 1;
    this.number2 = 2;

} );

Given( "Dados dos numeros -1 y 2", function () {

    this.number1 = -1;
    this.number2 = 2;

} );

Given( "Dados dos numeros 1 y -2", function () {

    this.number1 = 1;
    this.number2 = -2;

} );

Given( "Dados dos numeros -1 y -2", function () {

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
    assert.equal( this.resultado, 3 );
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
