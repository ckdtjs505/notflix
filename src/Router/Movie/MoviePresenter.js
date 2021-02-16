import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Seaction from "../../components/Seaction";
import Loader from "../../components/loader";
import Error from "../../components/Message";
import Poster from "../../components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 25px;
`;

const MoviePresenter = ({
  loading,
  movieNowPlaying,
  movieTopRated,
  moviePopular,
  movieUpComing,
  movieDetail,
  error
}) => (
  <>
    <Helmet>
      <title>Home | Notflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {moviePopular && moviePopular.length > 0 && (
          <Seaction title="영화 인기 콘텐츠">
            {moviePopular.map(movie => (
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

        {movieTopRated && movieTopRated.length > 0 && (
          <Seaction title="영화 TOP 25 콘텐츠">
            {movieTopRated.map(movie => (
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

        {movieNowPlaying && movieNowPlaying.length > 0 && (
          <Seaction title="지금 뜨는 콘텐츠">
            {movieNowPlaying.map(movie => (
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
        {error && <Error text={error}></Error>}
      </Container>
    )}
  </>
);

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
