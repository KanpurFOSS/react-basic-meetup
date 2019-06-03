import React from 'react';

class Form extends React.Component {
	constructor() {
	  super();
	  this.changeContent = this.changeContent.bind( this );
	  this.submitItem = this.submitItem.bind( this );
  
	  this.state = {
		content: ''
	  }
	}

	changeContent( e ) {
		this.setState( {
			content: e.target.value
		} );
	}

	submitItem( e ) {
		if ( 13 === e.keyCode ) {
			this.props.addItem( this.state.content );
		}
	}

	render() {
		return (
			<div className="add-new-task">
				<input
					type="text"
					name="new-task"
					placeholder="Add a new item..."
					value={ this.state.content }
					onChange={ this.changeContent }
					onKeyDown={ this.submitItem }
				/>
			</div>
		);
	}
};

export default Form;
