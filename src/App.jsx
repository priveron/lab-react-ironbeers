import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import BeerList from './pages/BeerList';
import Beer from './components/Beer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={BeerList}/>
        <Route path="/beers/:id" component={Beer}/>
        <Route path="/random-beer"component={RandomBeer}/>
        <Route path="/new-beer" component={NewBeer}/>
      </Switch>
    </div>
  );
}

export default App;
