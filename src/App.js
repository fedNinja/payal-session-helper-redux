import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodos } from './actions/todos';

import './App.css';

class App extends Component {
  state = {
    todo: '',
  }

  _handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  _handleSubmit = e => {
    e.preventDefault();
    this.props.createTodos(this.state.todo);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this._handleSubmit}>
          <input
            onChange={this._handleChange}
            type="text"
            id="todo"
            placeholder="Add a todos"
            value={this.state.todo}
          />
        </form>
      </div>
    );
  }
}

export default connect(undefined, { createTodos })(App);
