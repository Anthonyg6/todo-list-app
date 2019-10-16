import React, { Component } from "react";
import Todos from "./Todos";
import TodoForm from "./todo-form";
import Header from "./header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faCheck,
  faCheckCircle,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckDouble, faCheck, faCheckCircle, faPhone);

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
    console.log(todos);
  };
  render() {
    return (
      <div className="app">
        <Header />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
