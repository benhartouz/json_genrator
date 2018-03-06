import React , {Component} from "react";
import Attribute from './Attribute';
import AttributeCreator from './AttributeCreator';

export default class ObjectAttribute extends Component{

    constructor(props){
        super(props);
        this.state ={
            editing: false
        }
        this.toggleEditing = this.toggleEditing.bind(this);
    }

	render(){
		var keys = Object.keys( this.props.value ),
			className = this.state.editing ? 'open objectAttr compoundAttr' : 'objectAttr compoundAttr',
			openHash = ''
		;

		var attrs = [];
		for( var attr in this.props.value ){
			attrs.push(
				<Attribute
					parent={ this.props.value }
					value={this.props.value[attr]}
					original={this.props.original[attr]}
					key={ attr }
					attrkey={ attr }
				/>
			);
		}

		openHash = (<div className="attrChildren">
			{ attrs }
			<AttributeCreator type="attribute" parent={ this.props.value } />
		</div>);

		return (<span className={ className }>
				<span onClick={ this.toggleEditing } className="hashToggle">Map [{ keys.length }]</span>
				{openHash}
			</span>)
		;
    }
    
	toggleEditing(){
		this.setState({ editing: !this.state.editing });
    }
    
} 
