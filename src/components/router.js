import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../router/Home";
import TV from "../router/TV";
import Search from "../router/Search";
import Detail from "../router/Detail";
import Movie from "../router/Movie";
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
