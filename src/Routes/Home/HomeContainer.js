import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

export default class extends Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id }
      }
    } = props;
    this.state = {
      idTerm: ""
    };
    console.log(id);
  }

  handleSubmit = e => {
    const { idTerm } = this.state;
    if (idTerm !== "") {
      this.setState((this.props.match.id = idTerm));
    }
  };
  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      idTerm: value
    });
    console.log(this.state.idTerm);
  };

  render() {
    const { idTerm } = this.state;
    return (
      <HomePresenter
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        idTerm={idTerm}
      />
    );
  }
}
