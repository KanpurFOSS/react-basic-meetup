import React from 'react';

class ListItem extends React.Component {
	render() {
		return (
			<li className={ this.props.item.checked ? 'checked' : 'unchecked' }>
				<input
					className="check"
					type="checkbox"
					checked={ this.props.item.checked }
					onChange={ e => this.props.updateTask( this.props.index, e.target.checked ) }
				/>

				<span>{ this.props.item.content }</span>

				<button
					className="delete-button"
					onClick={ () => this.props.deleteTask( this.props.index ) }
				>
					X
				</button>
			</li>
		);
	}
};

export default ListItem;
