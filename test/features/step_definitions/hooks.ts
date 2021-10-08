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

/* solo se ejecuta cuando se lanza el test con el tag @prueba-tag1 */
Before( { tags: "@prueba-tag1" }, function() {
    console.info( "\tEsto se ejecuta antes del primer step de cada scenario ==> CUANDO SE LANZA EL TEST CON @prueba-tag1" );
} );

After( function() {
    this.log( "@@@@@@@@@@@@@@@@" );
    console.info( "\tEsto se ejecuta despues del ultimo step de cada scenario" );
} );

BeforeStep( function() {
    console.info( "\t\tEsto se ejecuta antes de cada step" );
} );

/* solo se ejecuta cuando se lanza el test con el tag @prueba-tag1 */
BeforeStep( { tags: "@prueba-tag1" }, function() {
    console.info( "\t\tEsto se ejecuta antes de cada step ==> CUANDO SE LANZA EL TEST CON @prueba-tag1" );
} );

AfterStep( function() {
    console.info( "\t\tEsto se ejecuta despues de cada step" );
} );
