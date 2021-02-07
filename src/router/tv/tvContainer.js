import React from "react";
import TvPresenter from "./tvPresenter";

export default class extends React.Component {
  state = {
    loading: null
  };

  render() {
    return <TvPresenter />;
  }
}
