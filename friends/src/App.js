import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/login'>Log In</Link>
          <Link to='/friends'>Friends</Link>
        </nav>

      </header>
      <Switch>
        <PrivateRoute path='/friends' component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
