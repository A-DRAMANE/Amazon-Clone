import React from 'react'
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import LogIn from "./components/LogIn"
import Payment from "./components/Payment"
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom";
import "./index.css"
import { useEffect } from "react";
import {auth} from './fireBase';
import {useStateValue} from "./StateProvider"

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>',authUser);

      if(authUser){
        //the use logged in ot was logged

        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        //logged out

        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
    
  }, [])

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
          <Route path="/payment">
            <Header />
            <Payment/>
          </Route>
          <Route path="">
            <div className="bande">
              <h1 className="faso" >Funny <span className="amazone">Amazon</span> Clone <span className="from">From</span> <span className="fils">Fils du Faso</span><span className="imageLogo"></span></h1>
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
