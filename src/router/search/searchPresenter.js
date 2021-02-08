import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  loading,
  searchTVResult,
  searchMovieResult,
  searchByTerm,
  error,
  handleSubmit
}) => <div>Search</div>;

SearchPresenter.propTypes = {
  searchTVResult: PropTypes.array,
  searchMovieResult: PropTypes.array,
  searchByTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
