import React from 'react';
import {Router, Route, Switch} from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import UserPage from './routes/UserPage';
import MainPage from './routes/MainPage';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" breadcrumbName="Home" component={MainPage}/>
        {/*<Route path="/users" exact component={UserPage}/>*/}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
