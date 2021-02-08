import React from "react";
import TvPresenter from "./TVPresenter";
import { tvApi } from "../../components/api";

export default class extends React.Component {
  state = {
    loading: null,
    tvTopRated: null,
    tvPopular: null,
    tvAringToday: null,
    tvDetail: null,
    error: false
  };

  async componentDidMount() {
    try {
      const {
        data: { results: tvTopRated }
      } = await tvApi.getTopRated();
      const {
        data: { results: tvPopular }
      } = await tvApi.getPopular();
      const {
        data: { results: tvAringToday }
      } = await tvApi.getAiringToday();
      this.setState({
        tvTopRated,
        tvPopular,
        tvAringToday,
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
    const { loading, tvTopRated, tvPopular, tvAringToday } = this.state;
    return (
      <TvPresenter
        loading={loading}
        tvTopRated={tvTopRated}
        tvPopular={tvPopular}
        tvAringToday={tvAringToday}
      />
    );
  }
}
