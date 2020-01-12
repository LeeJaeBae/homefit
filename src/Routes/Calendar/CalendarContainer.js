import React, { Component } from "react";
import CalendarPresenter from "./CalendarPresenter";

export default class extends Component {
  state = { name: "Calendar" };
  render() {
    const { name } = this.state;
    return <CalendarPresenter name={name} />;
  }
}
