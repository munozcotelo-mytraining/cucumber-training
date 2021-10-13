import { assert }  from "chai";
import { binding } from "cucumber-tsflow";
import { given }   from "cucumber-tsflow";
import { then }    from "cucumber-tsflow";
import { when }    from "cucumber-tsflow";
import { before }  from "cucumber-tsflow";
import { after }   from "cucumber-tsflow";

import { Calculadora } from "./../../../src/calculadora";

console.info( Calculadora );

@binding()
class SumaTest {

    private number1   : number;
    private number2   : number;
    private resultado : number;
    private exception : Error;

    private getGlobalContext() : any {
        return this[ "_worldObj" ];
    }

    @given( "TsFlow Dados dos numeros -1 y -2 con Ts" )
    public settingNumbersHardcoded() : void {

        const me : SumaTest = this;

        console.info( me.getGlobalContext().method1() );

        me.number1 = Number( -1 );
        me.number2 = Number( -2 );

    };

    @then( "TsFlow Obtengo una excepcion" )
    public checkException() : void {

        const me : SumaTest = this;

        assert.isDefined( me.exception);

    }

    /* Cualquiera de las dos vale */
    @given( "TsFlow Dados dos numeros {int} y {int}" )
    // @given( /TsFlow Dados dos numeros (.*) y (.*)/ )
    public settingNumbers(  a : number, b : number ) : void {

        const me : SumaTest = this;

        console.info( me.getGlobalContext().method1() );

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
            // me.exception = null;

        } catch ( error ) {
            me.exception = error;
        }

        console.info( me.exception );

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
