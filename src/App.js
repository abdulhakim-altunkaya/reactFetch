import { useState, useEffect } from "react";
import logo from './sun.png';
import Ind1 from "./Ind1";
import DividendCalculator from "./DividendCalculator"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App2">
      <Switch>
        <Route exact path="/indicators"><Ind1 /></Route>
        <Route exact path="/dividend-calculator"><DividendCalculator /></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
