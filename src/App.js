import React from 'react';
import './App.css';
import items from './data.js';
import Form from './components/Form.js';
import List from './components/List.js';

class App extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind( this );
    this.updateTask = this.updateTask.bind( this );
    this.deleteTask = this.deleteTask.bind( this );

    this.state = {
      items
    }
  }

  addItem( value ) {
    const items = [...this.state.items];

    items.push( {
      content: value,
      checked: false
    } );

    this.setState({
      items
    });
  }

  updateTask( index, value ) {
    const items = [...this.state.items];

    items[index].checked = value;

    this.setState({
      items
    });
  }

  deleteTask( index ) {
    const items = [...this.state.items];

    items.splice( index, 1 );

    this.setState({
      items
    });
  }

  render() {
    return (
      <div className="wrap">
        { this.state.items.length > 0 && (
          <List
            items={ this.state.items }
            updateTask={ this.updateTask }
            deleteTask={ this.deleteTask }
          />
        )}
  
        <Form
          addItem={ this.addItem }
        />
  
        <div className="credits">
          <p>Designed by <a href="https://codepen.io/mattlitzinger/pen/JfECh">Matt Litzinger</a></p>
        </div>
      </div>
    );
  }
};

export default App;

// https://slides.com/alexanderfarennikov/react-js-fundamentals/fullscreen#/20