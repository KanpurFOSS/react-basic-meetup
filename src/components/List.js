import React from 'react';
import ListItem from './ListItem.js';

class List extends React.Component {
	render() {
		return (
			<div className="task-list">
				<ul>
					{ this.props.items.map( ( i, n ) => (
						<ListItem
							key={ n }
							index={ n }
							item={ i }
							updateTask={ this.props.updateTask }
							deleteTask={ this.props.deleteTask }
						/>
					) )}
				</ul>
			</div>
		);
	}
};

export default List;
