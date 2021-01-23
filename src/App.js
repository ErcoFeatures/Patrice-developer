import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Contact from "./pages/Contact";
import Header from "./component/Header";
import Projects from "./component/Projects";
import OpenSourceLibs from "./component/OpenSouceLibs";

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
                        <Header/>
                        <OpenSourceLibs/>
                        <Projects/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
