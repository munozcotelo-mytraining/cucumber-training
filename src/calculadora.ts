class Calculadora {


    public static suma( a : number, b : number ) : number {

        if ( ( a > 0 ) && ( b > 0 ) ) {
            return a + b;
        } else {
            throw new Error( "Both numbers must be greather than 0" );
        }

    }

}

export { Calculadora };
