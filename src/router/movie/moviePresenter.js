import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MoviePresenter = ({
  loading,
  movieNowPlaying,
  movieTopRated,
  moviePopular,
  movieUpComing,
  movieDetail,
  error
}) => <div>Movie</div>;

MoviePresenter.propTypes = {
  movieNowPlaying: PropTypes.array,
  movieTopRated: PropTypes.array,
  moviePopular: PropTypes.array,
  movieUpComing: PropTypes.array,
  movieDetail: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default MoviePresenter;
