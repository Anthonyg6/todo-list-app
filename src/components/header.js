import React, { Component } from "react";
import Clock from "./clock.js";

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <h1 className="header">Welcome, what is on the agenda for today?</h1>
        <h2 className="current-clock">
          <Clock />
        </h2>
      </div>
    );
  }
}
