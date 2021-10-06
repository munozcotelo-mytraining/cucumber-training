import { assert }            from "chai";
import { Given, When, Then } from "@cucumber/cucumber";

import { Calculadora } from "./../../../src/calculadora";

let resultado : number;
let number1   : number;
let number2   : number;
let exception : Error;

Given( "Dados dos numeros 1 y 2", () => {

    number1 = 1;
    number2 = 2;

} );

Given( "Dados dos numeros -1 y 2", () => {

    number1 = -1;
    number2 = 2;

} );

Given( "Dados dos numeros 1 y -2", () => {

    number1 = 1;
    number2 = -2;

} );

Given( "Dados dos numeros -1 y -2", () => {

    number1 = -1;
    number2 = -2;

} );

When( "Cuando los sumo", () => {

    try {

        resultado = Calculadora.suma( number1, number2 );
        exception = null;

    } catch ( error ) {
        exception = error;
    }

} );

Then( "La suma es 3", () => {
    assert.equal( resultado, 3 );
} );

Then( "Obtengo una excepcion", () => {
    assert.isDefined( exception);
} );

/* ------------------- */

Given( "X - Dados dos numeros {int} y {int}", ( a : number, b : number ) => {

    number1 = a;
    number2 = b;

} );

Then( "X - La suma es {int}", ( resultadoEsperado : number ) => {
    assert.equal( resultado, resultadoEsperado );
} );

/* ------------------- */
