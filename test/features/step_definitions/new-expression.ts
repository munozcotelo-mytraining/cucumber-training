import { assert }              from "chai";
import { Given, When, Then }   from "@cucumber/cucumber";
import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({

    name        : "color",
    regexp      : /red|blue|yellow/,
    transformer : s => new Colour(s),

} );

class Colour {

    private theColour : string;

    public constructor( colour : string ) {
        this.theColour = colour;
    }

    public response() : string {
        return this.theColour;
    }

}

Given( "The parameter {color} to build the class", function( colour ) {
    this.colourObject = colour
} );

Then( "The response should be {word}", function( expected ) {
    assert.equal( this.colourObject.response(), expected );
} );
