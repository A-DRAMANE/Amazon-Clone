import React from 'react'
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import LogIn from "./components/LogIn"
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom";
import "./index.css"

function App() {
  return(
    <Router>
      <div className="app">
        <Switch>
          <Route path="/logInPage">
            <LogIn />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="">
            <div className="bande">
              <h1 className="faso" ><span className="amazone">Amazon</span> Clone <span className="from">From</span> <span className="fils">Fils du Faso</span><span className="imageLogo"></span></h1>
            </div>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
