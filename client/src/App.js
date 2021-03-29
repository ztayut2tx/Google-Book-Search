import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";

function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
