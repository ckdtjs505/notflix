import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 2rem;
`;
const Title = styled.h3`
  margin-bottom: 0.5rem;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 15px;
`;

const Seaction = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Container>
);

Seaction.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Seaction;
