import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 50%;
  color: black;
  font-size: 100px;
  left: ${props => (props.navOn ? "250px" : "0px")};
  transition: left 600ms ease-in-out;
`;

const HomePresenter = ({ navOn }) => (
  <Container navOn={navOn}>
    <Link to="/login">test</Link>
  </Container>
);

HomePresenter.propTypes = {
  navOn: PropTypes.bool
};

export default HomePresenter;
