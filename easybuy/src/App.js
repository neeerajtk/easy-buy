import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import Header from './components/header/header';
import {auth} from './firebase/firebase';


class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    };
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
      
    })
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
  );
  }
}

export default App;
