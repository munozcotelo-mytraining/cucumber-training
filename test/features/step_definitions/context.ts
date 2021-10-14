import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";

/*
 * The context allow to 'share' among processes
 *
 * The context define three parameters (IWorldOptions)
 *   attach     : to add info when test fails
 *   log        : to log information (it's printed as text/x.cucumber.log+plain)
 *   parameters : to access process parameters
 *
 * We can extend the context to define own methods and variables
 */

class CustomWorld extends World {

    public number1 : number;
    public resultado : number;

    public constructor( options : IWorldOptions ) {
        super( options )
    }

    public method1() : string {
        return "method1";
    }

    public setNumber1( value : number ) : void {
        this.number1 = value;
    }

    public getNumber1() : number {
        return this.number1;
    }

    public setResultado( value : number ) : void {
        this.resultado = value;
    }

    public getResultado() : number {
        return this.resultado;
    }

    public async waitForPromise() : Promise<number>{

        return new Promise<number>( ( resolve : ( data : number ) => void, reject : ( error : Error ) => void ) => {

            setTimeout( () => {
                return resolve( 5 );
            }, 1500 );

        } );

    }

}

setWorldConstructor( CustomWorld );
// setWorldConstructor( World );
