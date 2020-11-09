import './App.css';


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import AllShoes from './components/AllShoes';
import Shoe from './components/Shoe';
import NotFound from './components/NotFound';
import Purchase from './components/Purchase';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <AllShoes />
        </Route>

        <Route path="/product/:id">
          <Shoe />
        </Route>

        <Route path="/purchased">
          <Purchase />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
