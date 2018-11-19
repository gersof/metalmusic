import React, { Component } from 'react';
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Layout from "./Layout";
import Error404 from "./Error404";
import * as firebase from 'firebase';
import config from "./config/fireConfig";
var appFire = firebase.initializeApp(config);
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/layout" component={Layout} />
          <Route path="/login" exact component={Login} />
          <Route path="/**" component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
