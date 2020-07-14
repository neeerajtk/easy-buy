import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage'

const HomesPage = () => (
  <div>
    <h1>HOME / LIVING</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/homes' component={HomesPage} />
      </Switch>
    </div>
  );
}

export default App;
