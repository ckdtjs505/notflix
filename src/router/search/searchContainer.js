import React from "react";
import SearchPresenter from "./searchPresenter";
import { movieApi, tvApi } from "../../components/api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: null,
      searchTVResult: null,
      searchMovieResult: null,
      searchTerm: "바보",
      error: false
    };
  }
  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") this.searchByTerm();
  };

  searchByTerm = async () => {
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
    const { loading, searchTVResult, searchMovieResult, searchTerm, error } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        searchTVResult={searchTVResult}
        searchMovieResult={searchMovieResult}
        searchTerm={searchTerm}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
