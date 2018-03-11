import React  , {Component} from 'react';
import ObjectAttribute from './ObjectAttribute';
import JSONPretty from 'react-json-pretty';
import Freezer from 'freezer-js';
import axios from 'axios';



var styles = {
	headText : {
		textTransform: "uppercase",
		fontSize: "20px",
		textDecoration: "underline",
		margin: "10px",
		color: "#209cee"
	}
}
export default class JsonEditor extends Component{

    constructor(props){
        super(props);
        this.state = {
            store : props.store , 
            original  : props.original 
		}
		this.geDatajsonFile = this.geDatajsonFile.bind(this);
    }

	render(){
        var store = this.props.store;
		return (
			<div className="docEditor">
			  <h1 style={styles.headText}>Json Genrating:</h1>	
			  <p style={{ textAlign: 'left' , color: '#999' , fontSize: '14px' }}>PS: Click to extend json object</p>	
			  <ObjectAttribute value={ this.state.store.json } original={ this.state.original.json }/>
			  <h1 style={styles.headText}>Json Preview:</h1>
		      <div style={{ clear: "both" }}></div>
              <JSONPretty id="json-pretty" json={this.state.store.json}></JSONPretty> 
			</div>
		);
	}

	componentDidMount(){
		this.geDatajsonFile();
		var me = this,
		// Let's create a listener to update the store on change
		listener = this.props.store.getListener();
		// We are going to update the props every time the store changes
		listener.on('update', function( updated ){
			me.setState({ store: updated });
				console.log("json updated : " , updated);
			axios({
				method: 'post',
				url: '/writefile',
				data: {
				  json: updated.json,
				}
			});

		});
	}
	
	// Get data json file
	geDatajsonFile(){
		var me = this;
		axios.get('/readfile')
		.then(function(response){
			me.state.store.set({json: response.data}); 			
		})
		.catch(error => {
			console.log('Error fetching and parsing data', error);
		});
	}
    
} 