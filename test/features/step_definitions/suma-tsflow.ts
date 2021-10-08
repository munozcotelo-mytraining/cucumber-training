import { assert }  from "chai";
import { binding } from "cucumber-tsflow";
import { given }   from "cucumber-tsflow";
import { then }    from "cucumber-tsflow";
import { when }    from "cucumber-tsflow";
import { before }  from "cucumber-tsflow";
import { after }   from "cucumber-tsflow";

import { Calculadora } from "./../../../src/calculadora";

import { Workspace } from "./Workspace.class";

@binding( [Workspace ] )
class SumaTest {

    private number1   : number;
    private number2   : number;
    private resultado : number;
    private exception : Error;

    private workspace : Workspace;

    public constructor( workspace : Workspace ) {
        this.workspace = workspace;
    }

    private getGlobalContext() : any {
        return this[ "_worldObj" ];
    }

    @before()
    public myBefore() : void {
        console.info( "---> un hook before de ts-flow" );
    }

    @before( "prueba-tag1")
    public myBeforeWithTag() : void {
        console.info( "---> un hook before de ts-flow por el uso del tag @prueba-tag1" );
    }

    /* Cualquiera de las dos vale */
    @given( "TsFlow Dados dos numeros {int} y {int}" )
    // @given( /TsFlow Dados dos numeros (.*) y (.*)/ )
    public settingNumbers(  a : number, b : number ) : void {

        const me : SumaTest = this;

        console.info( "Usando al contexto de cucumber", me.getGlobalContext().getSharedVariable() );
        console.info( "Usando el contexto inyectado", me.workspace.getSharedVariable() );

        me.number1 = Number( a );
        me.number2 = Number( b );

    };

    /* Cualquiera de las dos vale */
    // @when( /^TsFlow Cuando los sumo$/ )
    @when( "TsFlow Cuando los sumo" )
    public doSuma() : void {

        const me : SumaTest = this;

        try {

            me.resultado = Calculadora.suma( me.number1, me.number2 );
            me.exception = null;

        } catch ( error ) {
            me.exception = error;
        }

    }

    /* Cualquiera de las dos vale */
    // @when( /^TsFlow Cuando los sumo$/, "prueba-tag1" )
    @when( "TsFlow Cuando los sumo", "prueba-tag1" )
    public doSumaWithTag1() : void {

        console.info( "************************************************************************" );
        console.info( "\t****** Estoy sobrecargando este step/when por el uso de @prueba-tag1 ******" );
        console.info( "************************************************************************" );

        const me : SumaTest = this;

        try {

            me.resultado = Calculadora.suma( me.number1, me.number2 );
            me.exception = null;

        } catch ( error ) {
            me.exception = error;
        }

    }

    /* Cualquiera de las dos vale */
    @then( "TsFlow La suma es {int}" )
    // @then( /TsFlow La suma es (.*)/ )
    public checkSuma( resultadoEsperado : number ) : void {

        const me : SumaTest = this;

        assert.equal( this.resultado, resultadoEsperado );

    }

}

export { SumaTest };
