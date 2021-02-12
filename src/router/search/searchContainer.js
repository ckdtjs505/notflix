import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../components/api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { term }
      }
    } = props;
    this.state = {
      loading: true,
      searchTVResult: null,
      searchMovieResult: null,
      searchTerm: term,
      error: ""
    };
  }

  componentDidMount = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: searchTVResult }
      } = await tvApi.getSearch(searchTerm);
      const {
        data: { results: searchMovieResult }
      } = await movieApi.getSearch(searchTerm);
      this.setState({
        searchTVResult,
        searchMovieResult
      });
    } catch {
      this.setState({
        error: "can't find results"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { loading, searchTVResult, searchMovieResult, error } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        searchTVResult={searchTVResult}
        searchMovieResult={searchMovieResult}
        error={error}
      />
    );
  }
}
