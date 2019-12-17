import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/login'>Log In</Link>
        </nav>
      </header>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
