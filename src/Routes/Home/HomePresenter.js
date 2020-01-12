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

const HomePresenter = ({ handleSubmit, updateTerm, idTerm }) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Id placeholder="ID" onChange={updateTerm} value={idTerm} />
      <Link to={idTerm}>test</Link>
    </Form>
  </Container>
);

HomePresenter.propTypes = {
  handleSubmit: PropTypes.func,
  updateTerm: PropTypes.func,
  idTerm: PropTypes.string
};

export default HomePresenter;
