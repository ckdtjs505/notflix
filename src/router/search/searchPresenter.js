import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/loader";
import Seaction from "../../components/Seaction";
import Message from "../../components/Message";

const Container = styled.div`
  padding: 0px 25px;
`;

const SearchPresenter = ({ loading, searchTVResult, searchMovieResult, error }) => {
  if (loading) {
    return <Loader></Loader>;
  } else {
    return (
      <Container>
        {searchMovieResult && searchMovieResult.length > 0 && (
          <Seaction title="MovieResult">
            {searchMovieResult.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Seaction>
        )}

        {searchTVResult && searchTVResult.length > 0 && (
          <Seaction title="TVResult">
            {searchTVResult.map(tv => (
              <span key={tv.id}>{tv.name}</span>
            ))}
          </Seaction>
        )}

        {searchTVResult.length === 0 && searchTVResult.length === 0 && (
          <Message text={"검색 결과가 없습니다"}></Message>
        )}
      </Container>
    );
  }
};

SearchPresenter.propTypes = {
  searchTVResult: PropTypes.array,
  searchMovieResult: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default SearchPresenter;
