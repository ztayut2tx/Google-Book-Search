import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

function App() {
  return(
    <Router>
      <div>
        <Nav />
        <Jumbotron>
          <h1 className="display-4 text-center">Google Books Search</h1>
        </Jumbotron>
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
