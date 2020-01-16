import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  color: black;
  font-size: 100px;
`;
const Form = styled.form``;
const Id = styled.input``;

const LoginPresenter = () => (
  <Container>
    <Form>test</Form>
  </Container>
);

LoginPresenter.propTypes = {};

export default LoginPresenter;
