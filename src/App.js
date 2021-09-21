import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
