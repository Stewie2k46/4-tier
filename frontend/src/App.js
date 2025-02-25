import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        {/* Add more routes here */}
      </Switch>
    </Router>
  );
}

export default App;
