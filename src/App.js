import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import IceCream from "./pages/IceCream";
import Cakes from "./pages/Cakes";

function App(props) {
  return (
    <Router className="App-header">
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cakes">
          <Cakes />
        </Route>
        <Route path="/icecream">
          <IceCream />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
