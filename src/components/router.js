import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../router/home";
import TV from "../router/tv";
import Search from "../router/search";
import detail from "../router/detail";
import Header from "./header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/detail" exact component={detail}></Route>
      <Route path="/search" exact component={Search}></Route>
      <Route path="/tv" component={TV}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
