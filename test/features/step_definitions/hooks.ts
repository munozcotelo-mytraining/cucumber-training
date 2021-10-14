import { BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep } from "@cucumber/cucumber";

BeforeAll( function() {
    console.info( "Esto se ejecuta antes de todo" );
} );

AfterAll( function() {
    console.info( "Esto se ejecuta despues de todo" );
} );

Before( function() {
    console.info( "\tEsto se ejecuta antes del primer step de cada scenario" );
} );

After( function() {
    console.info( "\tEsto se ejecuta despues del ultimo step de cada scenario" );
} );

BeforeStep( function( scenario: any ) {
    console.info( "\t\tEsto se ejecuta antes de cada step", scenario );
} );

AfterStep( function() {
    console.info( "\t\tEsto se ejecuta despues de cada step" );
} );
