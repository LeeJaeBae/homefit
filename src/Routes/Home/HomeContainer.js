import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  bool: state.toggleNav.bool
});

export default connect(mapStateToProps)(
  class extends Component {
    render() {
      const { bool } = this.props;
      return <HomePresenter navOn={bool} />;
    }
  }
);
