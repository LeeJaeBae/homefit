import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Detail from "../Routes/Detail";
import Exercise from "../Routes/Exercise";

class Routers extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/:id/detail" component={Detail} />
            <Route path="/:id/exercise" component={Exercise} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Routers;
