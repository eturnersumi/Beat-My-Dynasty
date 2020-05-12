import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ManualGame from "./pages/ManualGame";
import ComputerGame from "./pages/ComputerGame";
import Results from "./pages/Results";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div>
        
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/manual" component={ManualGame} />
          <Route exact path="/computer" component={ComputerGame} />
          <Route exact path="/results" component={Results} />
       
      </div>
      <Footer />
    </Router>
  );
}

export default App;
