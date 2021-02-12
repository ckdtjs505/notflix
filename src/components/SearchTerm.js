import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input`
  all: unset;
  font-size: 1rem;
`;

const useSearch = push => {
  const [searchTerm, setSearchTerm] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm) {
      push(`/search/${searchTerm}`);
      window.location.reload();
    }
  };

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setSearchTerm(value);
  };

  return { onChange, handleSubmit };
};

export const SearchForm = prop => {
  const {
    history: { push }
  } = prop;
  const { onChange, handleSubmit } = useSearch(push);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="검색하기" onChange={onChange}></Input>
      </Form>
    </Container>
  );
};
