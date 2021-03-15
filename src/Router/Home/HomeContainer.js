import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi, tvApi } from "../../components/api";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      trendMovie: [],
      trendTV: []
    };
  }

  async componentDidMount() {
    try {
      const {
        data: { results: trendMovie }
      } = await movieApi.getTrending();
      const {
        data: { results: trendTV }
      } = await tvApi.getTrending();
      this.setState({
        trendMovie,
        trendTV
      });
    } catch {
      this.setState({
        error: "can't find TENDING"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { loading, trendMovie, trendTV } = this.state;
    return <HomePresenter loading={loading} trendMovie={trendMovie} trendTV={trendTV} />;
  }
}

export default HomeContainer;
