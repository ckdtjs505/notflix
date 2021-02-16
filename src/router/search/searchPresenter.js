import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/loader";
import Seaction from "../../components/Seaction";
import Message from "../../components/Message";
import Poster from "../../components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 25px;
`;

const SearchPresenter = ({ loading, searchTVResult, searchMovieResult, searchTerm, error }) => (
  <>
    <Helmet>
      <title>Search | Notflix</title>
    </Helmet>
    {loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        {searchMovieResult && searchMovieResult.length > 0 && (
          <Seaction title={searchTerm + " : 영화 검색 결과"}>
            {searchMovieResult.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              ></Poster>
            ))}
          </Seaction>
        )}

        {searchTVResult && searchTVResult.length > 0 && (
          <Seaction title={searchTerm + " : TV 프로그램 검색 결과"}>
            {searchTVResult.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.name}
                rating={tv.vote_average}
                year={tv.first_air_date.substring(0, 4)}
                isMovie={false}
              ></Poster>
            ))}
          </Seaction>
        )}

        {searchTVResult.length === 0 && searchTVResult.length === 0 && (
          <Message text={"검색 결과가 없습니다"}></Message>
        )}
      </Container>
    )}
  </>
);

SearchPresenter.propTypes = {
  searchTVResult: PropTypes.array,
  searchMovieResult: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default SearchPresenter;
