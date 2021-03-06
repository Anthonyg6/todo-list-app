import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    id: " ",
    content: " "
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      id: Math.random(),
      content: ""
    });

    console.log(this.state);
  };

  render() {
    return (
      <div className="todo-form-wrapper">
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <label className="form-label">Add some more Todo's</label>
          <input
            className="todo-input"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          ></input>
        </form>
      </div>
    );
  }
}
