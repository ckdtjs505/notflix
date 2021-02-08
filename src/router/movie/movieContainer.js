import React from "react";
import MoviePresenter from "./MoviePresenter";
import { movieApi } from "../../components/api";

export default class extends React.Component {
  state = {
    loading: true,
    movieNowPlaying: null,
    movieTopRated: null,
    moviePopular: null,
    movieUpComing: null,
    movieDetail: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const {
        data: { results: movieNowPlaying }
      } = await movieApi.getNowPlaying();
      const {
        data: { results: movieTopRated }
      } = await movieApi.getTopRate();
      const {
        data: { results: moviePopular }
      } = await movieApi.getPopular();
      const {
        data: { results: movieUpComing }
      } = await movieApi.getUpComing();
      this.setState({
        movieNowPlaying,
        movieTopRated,
        moviePopular,
        movieUpComing
      });
    } catch {
      this.setState({
        error: "can't find movie"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { loading, movieNowPlaying, movieTopRated, moviePopular, movieUpComing } = this.state;
    return (
      <MoviePresenter
        loading={loading}
        movieNowPlaying={movieNowPlaying}
        movieTopRated={movieTopRated}
        moviePopular={moviePopular}
        movieUpComing={movieUpComing}
      />
    );
  }
}
