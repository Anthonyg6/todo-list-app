import React, { Component } from "react";
import Calendar from "react-calendar";

export default class ReactCalendar extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div className="calendar">
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}
