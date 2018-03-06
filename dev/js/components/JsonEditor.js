import React  , {Component} from 'react';
import ObjectAttribute from './ObjectAttribute';
import JSONPretty from 'react-json-pretty';

export default class JsonEditor extends Component{

    constructor(props){
        super(props);
        this.state = {
            store : props.store , 
            original  : props.original 
        }
    }

	render(){
        var store = this.props.store;
		return (
			<div className="docEditor">
              <JSONPretty id="json-pretty" json={this.state.store.json}></JSONPretty>
			  <ObjectAttribute value={ this.state.store.json } original={ this.state.original.json }/>
			</div>
		);
	}

	componentDidMount(){
		var me = this,
		// Let's create a listener to update the store on change
		listener = this.props.store.getListener();
		// We are going to update the props every time the store changes
		listener.on('update', function( updated ){
            me.setState({ store: updated });
		});
    }
    
} 