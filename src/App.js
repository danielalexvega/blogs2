import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PageRenderer from './components/page-renderer'

function App() {
  const user = {
    firstName: 'Daniel',
    lastName: 'Vega'
  }

  return (
    <Router>
      <div>
        <Navigation user={user} />
        <Switch>
          <Route path='/:page' component={PageRenderer} />
          <Route path='/' render={() => <Redirect to='/home' />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;