import React, { Component } from "react";

export default class Header extends Component {
  state = {
    date: new Date()
  };

  seconds() {
    setInterval(() => {
      this.setState({});
    }, 1000);
  }
  render() {
    return (
      <div className="todo-header">
        <h1 className="header">Welcome, what is on the agenda for today?</h1>
        <h2 className="current-clock">
          {this.state.date.toLocaleTimeString()}
          {this.seconds()}
        </h2>
      </div>
    );
  }
}
