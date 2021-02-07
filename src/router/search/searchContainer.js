import React from "react";
import SearchPresenter from "./searchPresenter";

export default class extends React.Component {
  state = {
    loading: null
  };

  render() {
    return <SearchPresenter />;
  }
}
