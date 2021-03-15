import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../components/api";

class TVContainer extends React.Component {
  state = {
    loading: true,
    tvTopRated: null,
    tvPopular: null,
    tvAringToday: null,
    tvDetail: null,
    error: ""
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
        tvAringToday
      });
    } catch {
      this.setState({
        error: "can't find TV list"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { loading, tvTopRated, tvPopular, tvAringToday, error } = this.state;
    return (
      <TVPresenter
        loading={loading}
        tvTopRated={tvTopRated}
        tvPopular={tvPopular}
        tvAringToday={tvAringToday}
        error={error}
      />
    );
  }
}

export default TVContainer;
