import './App.css';
import React, {useEffect, useState} from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import FilmPage from './components/FilmPage/FilmPage';
import TicketPage from "./components/TicketPage/TicketPage.js"
import { AnimatedSwitch } from 'react-router-transition';


function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedSwitch>
        <Route path="/film" render={()=><FilmPage />} />
        <Route path="/ticket" render={()=><TicketPage />} />
        <Route path="/" component={Home} />
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
