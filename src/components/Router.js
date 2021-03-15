import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Router/Home/index";
import TV from "../Router/TV/index";
import Search from "../Router/Search/index";
import Detail from "../Router/Detail/index";
import Movie from "../Router/Movie/index";
import Header from "./header";

const Routers = () => (
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

export default Routers;
