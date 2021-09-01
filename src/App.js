import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./NavBar/NavBar";
import "./App.css";
import UsersDetails from "./Components/Users/UserDetails";
import Users from "./Components/Users/dummyusers";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/data" component={UsersDetails} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
