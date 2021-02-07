import React from "react";
import MoviePresenter from "./moviePresenter";
import { movieApi } from "../../components/api";

export default class extends React.Component {
  state = {
    loading: null,
    movieNowPlaying: null,
    movieTopRated: null,
    moviePopular: null,
    movieUpComing: null,
    movieDetail: null,
    error: false
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
        movieUpComing,
        loading: true
      });
    } catch {
      this.setState({
        error: true
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
