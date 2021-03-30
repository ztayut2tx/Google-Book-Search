import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import Nav from "./components/Nav";

function App() {
  return(
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
