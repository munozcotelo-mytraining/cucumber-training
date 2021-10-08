const path = require( "path" );

const featuresPath = path.join( __dirname, "test", "features" );

/* cucumber.js configuration */
let common = [

    "--publish-quiet",

    /*
     * Los tags se pueden colocar a nivel de
     * feature -> scenario, scenario outline y examples hereden el tag
     * scenario-> examples hereden el tag
     * No se pueden colocar a nivel de step (given, then...)
     * ==> podemos ejecutar un subconjunto de escenarios
     *
     * Se pueden incluir en hooks before, after, beforestep y afterstep
     * ==> podemos restringir los hooks a un subconjunto de escenarios
     *
     * cucumber-tsflow permite tambien el uso de tags en hooks
     * pero ademas permite usarlos en los steps given, then...
     * ¿cual es uso aqui? permiten sobrecargar un step. Es decir yo tengo un step con una definicion, puede definir otro step con la misma definicion
     * y diferente comportamiente simplemente fijando un tag (ejemplo en suma-tsflow.ts)
     *
     */

    // lanza los test con tag1 (ademas implica la ejecucion de ciertos hooks)
    "--tags \"@prueba-tag1\"",

    // lanza los test con tag1 y no tienen tag2
    // "--tags \"@prueba-tag1 and not @prueba-tag2\"",

    // lanza los test con tag1 y tag2 (ninguno)
    // "--tags \"@prueba-tag1 and @prueba-tag2\"",

    // lanza los test con tag1 o tag2
    // "--tags \"@prueba-tag1 or @prueba-tag2\"",

    // "--parallel 2",

    /* Specify our feature files */
    `${ featuresPath }/**/*.feature`,

    /* Load TypeScript module */
    "--require-module ts-node/register",

    /* Load step definitions */
    `--require ${ featuresPath }/step_definitions/**/*.ts`,

    /* Load custom formatter */
    "--format progress-bar",

    /* Load custom formatter */
    "-f @cucumber/pretty-formatter",

].join( " " );

module.exports = {

    default: `${ common }`,

};
