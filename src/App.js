import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
        <Router>
            <div className="app__body">
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route  exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
