import './App.css';
import React, {useEffect, useState} from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import FilmPage from './components/FilmPage/FilmPage';
import TicketPage from "./components/TicketPage/TicketPage.js"
import DiscountPage from './components/DiscountsPage/DiscountsPage';
import Soon from "./components/Soon/Soon"
import AboutPage from "./components/AboutPage/AboutPage"
import BuyTicket from "./components/BuyTicket/BuyTicket"
import FinalPage from "./components/FilmPage/FilmPage"
import { AnimatedSwitch } from 'react-router-transition';


function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedSwitch>
        <Route path="/film" render={()=><FilmPage />} />
        <Route path="/final" render={()=><FinalPage />} />
        <Route path="/ticket" render={()=><TicketPage />} />
        <Route path="/soon" render={()=><Soon />} />
        <Route path="/discount" render={()=><DiscountPage />} />
        <Route path="/about" render={()=><AboutPage />} />
        <Route path="/buy" render={()=><BuyTicket />} />
        <Route path="/" component={Home} />
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
