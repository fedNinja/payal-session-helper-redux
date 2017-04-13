import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodos } from './actions/todos';

import './App.css';
import store from './store';

const img = "https://cms-assets.tutsplus.com/uploads/users/117/posts/22679/image/workicon-014.jpg";

class App extends Component {
  state = {
    todo: ''
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
    console.log(`Testing the props ${JSON.stringify(this.props)}`);
    return (
      <div className="App" style={{backgroundImage:`url(${img})`}}>
        <h1>CREATE YOUR OWN TO DO LIST</h1>
        <form onSubmit={this._handleSubmit}>
          <input className="inputStyle"
            onChange={this._handleChange}
            type="text"
            id="todo"
            placeholder="Add an item to the list"
            value={this.state.todo}
          />
        </form>
        <div className="listDisplay">
          <ul>
            {this.props.todos.map(todo =>
            <li key={todo.id}
              onClick={() => {
                store.dispatch({
                  type: 'TOGGLE_TODOS',
                  id:todo.id
                });
              }}
              style={{
                textDecoration:todo.completed?'line-through':'none'
              }}>
              {todo.todo}
            </li>
            )}
          </ul>
        </div>
        <div className="filterDiv">
        <span>show:</span>
        <a href="#"><span>All</span></a>
        <a href="#"><span>Active</span></a>
        <a href="#"><span>Completed</span></a>
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    todos:state.todos
  }), { createTodos })(App);
