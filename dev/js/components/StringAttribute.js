import React , {Component} from 'react';

export default class StringAttribute  extends Component{
    constructor(props){
        super(props);
        this.state =  {
			editing: !this.props.value,
			value: this.props.value,
			modified: false
        }
        this.setEditMode = this.setEditMode.bind(this);
        this.setValue = this.setValue.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
    }

    render(){
		var className = 'stringAttr';
		if( this.state.modified )
			className = ' modified';

		if( !this.state.editing )
			return <span onClick={ this.setEditMode } className={ className }>{ this.props.value }</span>;

		return <input value={ this.state.value } onChange={ this.updateValue } onBlur={ this.setValue } ref="input" onKeyDown={this.handleKeyDown} />;
	}

	componentDidUpdate( prevProps, prevState ){
		if( this.state.editing && ! prevState.editing ){
			var node = this.refs.input.getDOMNode();
			node.focus();
			node.value = node.value;
		}
	}

	componentDidMount(){
		if( this.state.editing ){
			var node = this.refs.input.getDOMNode();
			node.focus();
			node.value = node.value;
		}
	}

	setEditMode () {
		this.setState({editing: true});
	}

	setValue () {
		if( this.state.modified )
			this.props.parent.set( this.props.attrkey, this.state.value );

		this.setState({editing: false});
	}

	updateValue ( e ) {
		this.setState({value: e.target.value, modified: e.target.value != this.props.value });
	}

	handleKeyDown( e ){
		if( e.which == 13 )
			this.setValue();
    }
    
	toggleEditing(){
		this.setState({ editing: !this.state.editing });
    }
    
} 
