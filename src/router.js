import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import LoginPage from './routes/LoginPage';
import HomePage from './routes/HomePage';
import requireAuthentication from './routes/requireAuthentication';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        {/*<Route path="/index" exact component={HomePage}/>*/}
        <Route path="/index" exact component={requireAuthentication(HomePage)}/>
        <Route path="/resource" exact component={requireAuthentication(HomePage)}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
