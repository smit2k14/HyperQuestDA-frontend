import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Loginpage} />
      </div>
    </Router>
  );
}
export default App;
