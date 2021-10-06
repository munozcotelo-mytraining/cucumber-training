const path = require( "path" );

const featuresPath = path.join( __dirname, "test", "features" );

/* cucumber.js configuration */
let common = [

    "--publish-quiet",

    // "--tags \"@tagONE\"",

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
