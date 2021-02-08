import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../components/api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: null,
      detail: null,
      error: false
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      location: { pathname },
      history: { push }
    } = this.props;
    if (isNaN(parseInt(id))) return push("/");

    this.setState({ loading: true });

    try {
      let detail;
      if (pathname.includes("/movie/")) {
        ({ data: detail } = await movieApi.getMovieDetail(id));
      } else {
        ({ data: detail } = await tvApi.getTVDetail(id));
      }
      this.setState({
        detail
      });
    } catch {
      this.setState({
        error: "can't find anything"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { loading, detail, error } = this.state;
    return <DetailPresenter loading={loading} detail={detail} error={error} />;
  }
}
