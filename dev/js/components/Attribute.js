import React , {Component} from 'react';
import typeDefaultValues from "./Types"
import Helper from './Helper';

export default class Attribute extends  Component{

    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    render(){
        var helper = new Helper();
		var typeAttribute = helper.createAttribute( this.props.value, this.props.original, this.props.parent, this.props.attrkey ),
			modifiedClass = this.props.value == this.props.original ? '' : ' modified',
			className = 'hashAttribute' + modifiedClass
		;

		return (
			<div className={className}>
				<a href="#" className="attrRemove" onClick={ this.handleRemove }>[x]</a>
				<span className="attrName">{this.props.attrkey }:</span>
				<span className="attrValue">{ typeAttribute }</span>
			</div>
		);
	}

	handleRemove ( e ) {
		e.preventDefault();
		if( this.props.parent.constructor == Array )
			this.props.parent.splice( this.props.attrkey, 1 );
		else
			this.props.parent.remove( this.props.attrkey );
	}

	shouldComponentUpdate( nextProps, nextState ){
		return nextProps.value != this.props.value || 
          nextProps.parent != this.props.parent
        ;
    }
    
}