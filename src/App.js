import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import FilmPage from './components/FilmPage/FilmPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" render={()=><Home />} />
        <Route path="/film" render={()=><FilmPage />} />
      </Switch>
    </Router>
  );
}

export default App;
