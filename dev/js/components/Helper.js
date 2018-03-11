import React , {Component} from 'react';
import StringAttribute from "./StringAttribute";
import ObjectAttribute from "./ObjectAttribute";
import ArrayAttribute from "./ArrayAttribute";
import NumberAttribute from "./NumberAttribute";
import BooleanAttribute from "./BooleanAttribute";
import typeDefaultValues from './Types';


export default class Helper extends  Component{

    guessType( value ){
        var type = typeof value;
    
        if( type != 'object' )
            return type;
    
        if( value instanceof Array )
            return 'array';
    
        if( value instanceof Date)
            return 'date';
    
        return 'object';
    }

    createAttribute( value, original, parent, key ){

        var type = this.guessType( value );
        var className = StringAttribute;
    
        if( type == 'object' )
            className = ObjectAttribute;
        else if ( type == 'array' )
            className = ArrayAttribute;
        else if ( type == 'number' )
            className = NumberAttribute;
        else if ( type == 'bool' )
            className = BooleanAttribute;
    
        if( typeof original == 'undefined' )
            original = typeDefaultValues[ type ];
    
        return React.createElement( className, {
            value: value,
            attrkey: typeof key != 'undefined' ? key : '',
            parent: parent,
            original: original
        });
        
    }

}