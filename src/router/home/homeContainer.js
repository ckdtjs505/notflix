import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: null
    };
  }

  render() {
    return <HomePresenter />;
  }
}
