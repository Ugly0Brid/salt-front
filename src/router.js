import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import LoginPage from './routes/LoginPage';
// import IndexPage from './routes/IndexPage';
// import MainPage from './routes/MainPage';
import HomePage from './routes/HomePage';

// import ResourcePage from './routes/ResourcePage';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/index" exact component={HomePage}/>
        <Route path="/resource" exact component={HomePage}/>
        {/*<Route path="/resource" exact component={MainPage}/>*/}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
