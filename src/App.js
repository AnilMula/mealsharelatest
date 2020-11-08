import './App.css';
import Home from './pages/home.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Meals from './pages/meals.js';
import Reservations from './pages/reservations';
import Reviews from './pages/reviews';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>

        <Route path="/meals" exact>
          <Meals></Meals>
        </Route>
        <Route path="/reservations" exact>
          <Reservations></Reservations>
        </Route>
        <Route path="/reviews">
          <Reviews></Reviews>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
