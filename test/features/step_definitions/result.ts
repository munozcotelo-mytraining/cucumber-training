import { assert }            from "chai";
import { Given, When, Then } from "@cucumber/cucumber";

Then( "X - La suma es {int}", function ( resultadoEsperado : number ) {
    console.info( "this", this );
    assert.equal( this.resultado, resultadoEsperado );
} );

