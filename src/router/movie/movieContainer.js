import React from "react";
import MoviePresenter from "./moviePresenter";

export default class extends React.Component {
  state = {
    loading: null
  };

  render() {
    return <MoviePresenter />;
  }
}
