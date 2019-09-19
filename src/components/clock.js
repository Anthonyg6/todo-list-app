import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString()
    };

    this.updateClock = this.updateClock.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(this.updateClock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render() {
    return <div>{this.state.time}</div>;
  }
}
