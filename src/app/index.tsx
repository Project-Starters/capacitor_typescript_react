import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Router, Route } from "react-router";
import { Home } from "app/containers/Home";
import 'app/res/fonts/fonts.css'


export const App = hot(({ history }: any) => (
  <Router history={history}>
    <Route path="/" exact component={Home} />
  </Router>
));
