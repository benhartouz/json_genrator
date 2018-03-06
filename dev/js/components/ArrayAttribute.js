import React , {Component} from 'react';
import Attribute from './Attribute';
import AttributeCreator from './AttributeCreator';
export default class ArrayAttribute extends Component{

    constructor(props){
        super(props);
        this.state = {
            editing: false
        }
        this.toggleEditing = this.toggleEditing.bind(this);
    }

    render(){
		var keys = Object.keys( this.props.value ),
			className = this.state.editing ? 'open arrayAttr compoundAttr' : 'arrayAttr compoundAttr',
			openArray = ''
		;

		var attrs = [];
		for (var i = 0; i < this.props.value.length; i++) {
			attrs.push(
				<Attribute
					parent={ this.props.value }
					value={this.props.value[i]}
					original={this.props.original[i]}
					key={ i }
					attrkey={ i }
				/>
			);
		}

		openArray = (<div className="attrChildren">
			{ attrs }
			<AttributeCreator type="element" parent={ this.props.value } attrkey={ keys.length }/>
			</div>
		);

		return (<span className={ className }>
				<span onClick={this.toggleEditing} className="hashToggle">List [{keys.length}]</span>
				{openArray}
			</span>)
		;
    }
    
	toggleEditing(){
		this.setState({editing: !this.state.editing});
    }
    
}
