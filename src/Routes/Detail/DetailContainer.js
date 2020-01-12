import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends Component {
  state = { name: "Detail" };
  render() {
    const { name } = this.state;
    return <DetailPresenter name={name} />;
  }
}
