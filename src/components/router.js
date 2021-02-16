import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../router/Home/index";
import TV from "../router/TV/index";
import Search from "../router/Search/index";
import Detail from "../router/Detail/index";
import Movie from "../router/Movie/index";
import Header from "./header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/search/:term" exact component={Search}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/tv/:id" exact component={Detail}></Route>
      <Route path="/tv" component={TV}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
      <Route path="/movie" component={Movie}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
