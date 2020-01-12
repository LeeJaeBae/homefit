import React, { Component } from "react";
import ExercisePresenter from "./ExercisePresenter";

export default class extends Component {
  state = { name: "Exercise" };
  render() {
    const { name } = this.state;
    console.log(this);
    return <ExercisePresenter name={name} />;
  }
}
